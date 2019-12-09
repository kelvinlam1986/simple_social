import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  TextField,
  Icon,
  CardActions
} from "@material-ui/core";
import { Image } from "@material-ui/icons";
import { read, update } from "./api-shop";
import auth from "../auth/auth-helper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    marginTop: 100
  },
  card: {
    textAlign: "center",
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.protectedTitle,
    fontSize: "1.2em"
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: "auto"
  },
  filename: {
    marginLeft: "10px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  subheading: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  error: {
    verticalAlign: "middle"
  },
  input: {
    display: "none"
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing.unit * 2
  }
});

class EditShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      redirect: false,
      name: "",
      description: "",
      image: "",
      error: "",
      owner: ""
    };
    this.match = props.match;
  }

  componentDidMount = () => {
    this.shopData = new FormData();
    const jwt = auth.isAuthenticated();
    read(
      {
        shopId: this.match.params.shopId
      },
      {
        t: jwt.token
      }
    ).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({
          id: data._id,
          name: data.name,
          description: data.description,
          owner: data.owner.name
        });
      }
    });
  };

  handleChange = name => event => {
    const isImageField = name === "image";
    let value = undefined;
    if (isImageField) {
      value = event.target.files[0];
    } else {
      value = event.target.value;
    }
    this.shopData.set(name, value);
    this.setState({ [name]: value });
  };

  clickSubmit = () => {
    const jwt = auth.isAuthenticated();
    update(
      {
        shopId: this.match.params.shopId
      },
      {
        t: jwt.token
      },
      this.shopData
    ).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ redirect: true });
      }
    });
  };

  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      return <Redirect to={"/seller/shops"} />;
    }
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.title}
            >
              Edit Shop
            </Typography>
            <br />
            <Avatar className={classes.bigAvatar}></Avatar>
            <br />
            <input
              type="file"
              accept="image/*"
              id="icon-button-file"
              style={{ display: "none" }}
              onChange={() => this.handleChange("image")}
            ></input>
            <label htmlFor="icon-button-file">
              <Button variant="contained" color="secondary" component="span">
                Change Logo <Image></Image>
              </Button>
            </label>
            <span className={classes.filename}>
              {this.state.image ? this.state.image.name : ""}
            </span>{" "}
            <br />
            <TextField
              id="name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange("name")}
              margin="normal"
            />{" "}
            <br />
            <TextField
              id="multiline-flexible"
              label="Description"
              multiline
              rows={3}
              className={classes.textField}
              value={this.state.description}
              onChange={this.handleChange("description")}
              margin="normal"
            />{" "}
            <br />
            <Typography
              type="subheading"
              component="h4"
              className={classes.subheading}
            >
              Owner: {this.state.owner}
            </Typography>
            <br />
            {this.state.error && (
              <Typography component="p" color="error">
                <Icon color="error" className={classes.error}>
                  error
                </Icon>
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.clickSubmit}
              className={classes.submit}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

EditShop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditShop);
