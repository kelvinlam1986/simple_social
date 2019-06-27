import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { FileCopy } from "@material-ui/icons";
import auth from "../auth/auth-helper";
import { read, update } from "./api-user";
import defaultPhoto from "../assets/images/profile-pic.png";
import { CircularProgress } from "@material-ui/core";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  error: {
    verticalAlign: "middle"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  input: {
    display: "none"
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing.unit * 2
  },
  filename: {
    marginLeft: "10px"
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: "auto"
  },
  buttonProgress: {
    color: theme.palette.text.secondary,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class EditProfile extends Component {
  constructor({ match }) {
    super();
    this.state = {
      photo: "",
      about: "",
      name: "",
      email: "",
      password: "",
      redirectToProfile: false,
      redirectToUsers: false,
      error: "",
      id: "",
      loading: false
    };

    this.match = match;
  }

  componentDidMount = () => {
    this.userData = new FormData();
    const jwt = auth.isAuthenticated();
    read({ userId: this.match.params.userId }, { t: jwt.token }).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({
          id: data._id,
          name: data.name,
          email: data.email,
          about: data.about
        });
      }
    });
  };

  clickSubmit = () => {
    const jwt = auth.isAuthenticated();
    const user = {
      name: this.state.name || undefined,
      email: this.state.email || undefined,
      password: this.state.password || undefined,
      about: this.state.about || undefined
    };
    this.setState({ loading: true });
    update(
      { userId: this.match.params.userId },
      { t: jwt.token },
      this.userData
    ).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ id: data._id, redirectToProfile: true });
      }
      this.setState({ loading: false });
    });
  };

  handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    this.userData.set(name, value);
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;
    const photoUrl = this.state.id
      ? `/api/users/photo/${this.state.id}?${new Date().getTime()}`
      : defaultPhoto;
    if (this.state.redirectToProfile) {
      return <Redirect to={"/user/" + this.state.id} />;
    }

    return (
      <Card className={classes.card}>
        <CardHeader title="Thông tin của bạn" />
        <Avatar src={photoUrl} className={classes.bigAvatar} />
        <br />
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
          onChange={this.handleChange("photo")}
        />
        <label htmlFor="icon-button-file">
          <Button variant="contained" color="default" component="span">
            Upload &nbsp; <FileCopy />
          </Button>
        </label>
        <span className={classes.filename}>
          {this.state.photo ? this.state.photo.name : ""}
        </span>
        <CardContent>
          <TextField
            id="name"
            label="Tên của bạn"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />{" "}
          <br />
          <TextField
            id="multiline-flexible"
            label="Bạn thấy thế nào ?"
            multiline
            rows="2"
            value={this.state.about}
            className={classes.textField}
            onChange={this.handleChange("about")}
            margin="normal"
          />{" "}
          <br />
          <TextField
            id="email"
            label="Email của bạn"
            type="email"
            className={classes.textField}
            onChange={this.handleChange("email")}
            value={this.state.email}
            margin="normal"
          />{" "}
          <br />
          <TextField
            id="password"
            label="Password của bạn"
            type="password"
            className={classes.textField}
            onChange={this.handleChange("password")}
            value={this.state.password}
            margin="normal"
          />{" "}
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
            Cập nhật
          </Button>
          {this.state.loading && (
            <CircularProgress className={classes.buttonProgress} />
          )}
        </CardActions>
      </Card>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfile);
