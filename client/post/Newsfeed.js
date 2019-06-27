import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Typography, Divider, withStyles } from "@material-ui/core";
import NewPost from "./NewPost";
import PostList from "./PostList";
import auth from "../auth/auth-helper";
import { listNewsFeed } from "../post/api-post";

const styles = theme => ({
  card: {
    margin: "auto",
    paddingTop: 0,
    paddingBottom: theme.spacing.unit * 3
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme
      .spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: "1em"
  },
  media: {
    minHeight: 330
  }
});

class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount = () => {
    this.loadPosts();
  };

  componentWillReceiveProps = props => {
    if (props.afterFollow != this.props.afterFollow) {
      this.loadPosts();
    }
  };

  loadPosts = () => {
    const jwt = auth.isAuthenticated();
    listNewsFeed({ userId: jwt.user._id }, { t: jwt.token }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ posts: data });
      }
      this.props.updateAfterFollowState(false);
    });
  };

  addPost = post => {
    let updatedPosts = this.state.posts;
    updatedPosts.unshift(post);
    this.setState({ posts: updatedPosts });
  };

  removePost = post => {
    let updatedPosts = this.state.posts;
    const index = updatedPosts.indexOf(post);
    updatedPosts.splice(index, 1);
    this.setState({ posts: updatedPosts });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Tin mới cập nhật
        </Typography>
        <Divider />
        <NewPost addUpdate={this.addPost} />
        <Divider />
        <PostList removeUpdate={this.removePost} posts={this.state.posts} />
      </Card>
    );
  }
}

Newsfeed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Newsfeed);
