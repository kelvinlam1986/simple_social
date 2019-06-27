import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  IconButton,
  Avatar,
  withStyles,
  CardContent,
  Typography,
  CardActions,
  Divider
} from "@material-ui/core";
import { Delete, Favorite, FavoriteBorder, Comment } from "@material-ui/icons";
import PropTypes from "prop-types";
import auth from "../auth/auth-helper";
import { like, unlike, remove } from "./api-post";
import Comments from "./Comments";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginBottom: theme.spacing.unit * 3,
    backgroundColor: "rgba(0, 0, 0, 0.06)"
  },
  cardContent: {
    backgroundColor: "white",
    padding: `${theme.spacing.unit * 2}px 0px`
  },
  cardHeader: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  text: {
    margin: theme.spacing.unit * 2
  },
  photo: {
    textAlign: "center",
    backgroundColor: "#f2f5f4",
    padding: theme.spacing.unit
  },
  media: {
    height: 200
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { like: false, likes: 0, comments: [] };
  }

  componentDidMount = () => {
    this.setState({
      like: this.checkLike(this.props.post.likes),
      likes: this.props.post.likes.length,
      comments: this.props.post.comments
    });
  };

  componentWillReceiveProps = props => {
    this.setState({
      like: this.checkLike(props.post.likes),
      likes: props.post.likes.length,
      comments: props.post.comments
    });
  };

  updateComments = comments => {
    this.setState({ comments: comments });
  };

  checkLike = likes => {
    const jwt = auth.isAuthenticated();
    let match = likes.indexOf(jwt.user._id) !== -1;
    return match;
  };

  like = () => {
    let callApi = this.state.like ? unlike : like;
    const jwt = auth.isAuthenticated();
    callApi(
      {
        userId: jwt.user._id
      },
      {
        t: jwt.token
      },
      this.props.post._id
    ).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ like: !this.state.like, likes: data.likes.length });
      }
    });
  };

  deletePost = () => {
    const jwt = auth.isAuthenticated();
    remove({ postId: this.props.post._id }, { t: jwt.token }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.props.onRemove(this.props.post);
      }
    });
  };

  render() {
    const { classes } = this.props;
    const photoUrl = this.props.post.postedBy
      ? `/api/users/photo/${
          this.props.post.postedBy._id
        }?${new Date().getTime()}`
      : defaultPhoto;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar src={photoUrl} />}
          action={
            this.props.post.postedBy._id ===
              auth.isAuthenticated().user._id && (
              <IconButton onClick={this.deletePost}>
                <Delete />
              </IconButton>
            )
          }
          title={
            <Link to={"/user/" + this.props.post.postedBy._id}>
              {this.props.post.postedBy.name}
            </Link>
          }
          subheader={new Date(this.props.post.created).toLocaleDateString(
            "vi-VN",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            }
          )}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Typography component="p" className={classes.text}>
            {this.props.post.text}
          </Typography>
          {this.props.post.photo && (
            <div className={classes.photo}>
              <img
                className={classes.media}
                src={"/api/posts/photo/" + this.props.post._id}
              />
            </div>
          )}
        </CardContent>
        <CardActions>
          {this.state.like ? (
            <IconButton onClick={this.like} aria-label="Like" color="secondary">
              <Favorite />
              {"   "}
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  padding: "3px"
                }}
              >
                {this.state.likes}
              </span>
            </IconButton>
          ) : (
            <IconButton
              onClick={this.like}
              aria-label="Unlike"
              color="secondary"
            >
              <FavoriteBorder />
              {"   "}
              <span
                style={{
                  fontSize: "14px",
                  fontFamily: "Arial",
                  padding: "3px"
                }}
              >
                {this.state.likes}
              </span>
            </IconButton>
          )}{" "}
          <IconButton aria-label="Comment" color="secondary">
            <Comment />
            {"   "}
            <span
              style={{ fontSize: "14px", fontFamily: "Arial", padding: "3px" }}
            >
              {this.state.comments.length}
            </span>
          </IconButton>
        </CardActions>
        <Divider />
        <Comments
          postId={this.props.post._id}
          comments={this.state.comments}
          updateComments={this.updateComments}
        />
      </Card>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default withStyles(styles)(Post);
