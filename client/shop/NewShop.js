import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Icon,
  Paper
} from "@material-ui/core";
import { Image } from "@material-ui/icons";
import auth from "../auth/auth-helper";
import { create } from "./api-shop";

const style = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: "auto",
    padding: theme.spacing.unit * 3,
    marginTop: 100
  }),
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle,
    fontSize: "1em"
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing.unit * 2
  },
  filename: {
    marginLeft: "10px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  error: {
    verticalAlign: "middle"
  }
});

class NewShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      name: "",
      description: "",
      image: "",
      error: ""
    };
  }

  componentDidMount = () => {
    this.shopData = new FormData();
  };

  submit = () => {
    const jwt = auth.isAuthenticated();
    create(
      {
        userId: jwt.user._id
      },
      {
        t: jwt.token
      },
      this.shopData
    ).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ error: "", redirect: true });
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

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/seller/shops"}> </Redirect>;
    }
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2" className={classes.title}>
              New Shop
            </Typography>
            <br />
            <input
              type="file"
              accept="image/*"
              id="icon-button-file"
              style={{ display: "none" }}
              onChange={this.handleChange("image")}
            ></input>
            <label htmlFor="icon-button-file">
              <Button variant="contained" color="secondary" component="span">
                Upload Logo <Image></Image>
              </Button>
            </label>
            <span className={classes.filename}>
              {this.state.image ? this.state.image.name : ""}
            </span>{" "}
            <br />
            <TextField
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange("name")}
              className={classes.textField}
              margin="normal"
            ></TextField>{" "}
            <br />
            <TextField
              id="multiline-flexible"
              label="Description"
              multiline
              rows="2"
              value={this.state.description}
              onChange={this.handleChange("description")}
              className={classes.textField}
              margin="normal"
            ></TextField>
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
              onClick={this.submit}
              className={classes.submit}
            >
              Submit
            </Button>
            <Link to="/seller/shops" className={classes.submit}>
              <Button variant="contained">Cancel</Button>
            </Link>
          </CardActions>
        </Card>
      </Paper>
    );
  }
}

NewShop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(NewShop);
