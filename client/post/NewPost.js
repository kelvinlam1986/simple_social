import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  TextField,
  IconButton,
  Typography,
  Icon,
  CardActions,
  Button,
  withStyles,
  CircularProgress
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import defaultPhoto from "../assets/images/profile-pic.png";
import auth from "../auth/auth-helper";
import { create } from "../post/api-post";

const styles = theme => ({
  root: {
    backgroundColor: "#efefef",
    padding: `${theme.spacing.unit * 3}px 0px 1px`
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    marginBottom: theme.spacing.unit * 3,
    backgroundColor: "rgba(65, 150, 136, 0.09)",
    boxShadow: "none"
  },
  cardContent: {
    backgroundColor: "white",
    paddingTop: 0,
    paddingBottom: 0
  },
  cardHeader: {
    paddingTop: 8,
    paddingBottom: 8
  },
  photoButton: {
    height: 30,
    marginBottom: 5
  },
  input: {
    display: "none"
  },
  textField: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width: "90%"
  },
  submit: {
    margin: theme.spacing.unit * 2
  },
  filename: {
    verticalAlign: "super"
  },
  buttonProgress: {
    color: theme.palette.text.secondary
  }
});

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      photo: "",
      error: "",
      user: {},
      isLoading: false
    };
  }

  componentDidMount = () => {
    this.postData = new FormData();
    this.setState({ user: auth.isAuthenticated().user });
  };

  handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    this.postData.set(name, value);
    this.setState({ [name]: value });
  };

  clickPost = () => {
    const jwt = auth.isAuthenticated();
    this.setState({ isLoading: true });
    create(
      {
        userId: jwt.user._id
      },
      {
        t: jwt.token
      },
      this.postData
    ).then(data => {
      if (data.error) {
        this.setState({ error: data.error, isLoading: false });
      } else {
        this.setState({ text: "", photo: "", isLoading: false });
        this.props.addUpdate(data);
      }
    });
  };

  render() {
    const { classes } = this.props;
    const photoUrl = this.state.user
      ? `/api/users/photo/${this.state.user._id}?${new Date().getTime()}`
      : defaultPhoto;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar src={photoUrl} />}
            title={this.state.user.name}
            className={classes.cardHeader}
          />
          <CardContent className={classes.cardContent}>
            <TextField
              placeholder="Bạn đang nghĩ gì ?"
              multiline
              rows={3}
              value={this.state.text}
              className={classes.textField}
              margin="normal"
              onChange={this.handleChange("text")}
            />
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={this.handleChange("photo")}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="secondary"
                className={classes.photoButton}
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <span className={classes.filename}>
              {this.state.photo ? this.state.photo.name : ""}
            </span>
            {this.state.error && (
              <Typography component="p" color="error">
                <Icon color="error" className={classes.error}>
                  Lỗi
                </Icon>
                {this.state.error}
              </Typography>
            )}
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              disabled={this.state.text === "" || this.state.isLoading}
              className={classes.submit}
              onClick={this.clickPost}
            >
              Đăng
            </Button>
            {this.state.isLoading && (
              <CircularProgress className={classes.buttonProgress} />
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
  addUpdate: PropTypes.func.isRequired
};

export default withStyles(styles)(NewPost);
