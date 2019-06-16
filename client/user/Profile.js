import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Person from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import auth from "../auth/auth-helper";
import { read } from "../user/api-user";
import DeleteUser from "./DeleteUser";
import FollowProfileButton from "./FollowProfileButton";
import _ from "lodash";

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: "auto",
    padding: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 5
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 10
  }
});

class Profile extends Component {
  constructor({ match }) {
    super();
    this.state = { user: null, redirectToSignIn: false, following: false };
    this.match = match;
  }

  init = userId => {
    const jwt = auth.isAuthenticated();
    read({ userId: userId }, { t: jwt.token }).then(data => {
      if (data.error) {
        this.setState({ redirectToSignIn: true });
      } else {
        let following = this.checkFollow(data);
        this.setState({ user: data, following: following });
      }
    });
  };

  checkFollow = user => {
    const jwt = auth.isAuthenticated();
    if (_.isEmpty(user.followers)) {
      return false;
    }

    const match = user.followers.find(follower => {
      return follower._id == jwt.user._id;
    });

    return match;
  };

  clickFollowButton = callApi => {};

  componentDidMount = () => {
    this.init(this.match.params.userId);
  };

  componentWillReceiveProps = props => {
    this.init(props.match.params.userId);
  };

  render() {
    const { classes } = this.props;
    const photoUrl = this.state.user
      ? `/api/users/photo/${this.state.user._id}?${new Date().getTime()}`
      : "/api/users/defaultPhoto";
    const redirectToSignIn = this.state.redirectToSignIn;
    if (redirectToSignIn) {
      return <Redirect to="/signin" />;
    }

    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.title}>
          Profile
        </Typography>
        {this.state.user ? (
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={photoUrl} className={classes.bigAvatar} />
              </ListItemAvatar>
              <ListItemText
                primary={this.state.user.name}
                secondary={this.state.user.email}
              />
              {auth.isAuthenticated().user &&
              auth.isAuthenticated().user._id == this.state.user._id ? (
                <ListItemSecondaryAction>
                  <Link to={"/user/edit/" + this.state.user._id}>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                  </Link>
                  {this.state.user && (
                    <DeleteUser userId={this.state.user._id} />
                  )}
                </ListItemSecondaryAction>
              ) : (
                <FollowProfileButton
                  following={this.state.following}
                  onButtonClick={this.clickFollowButton}
                />
              )}
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary={
                  "Joined: " + new Date(this.state.user.created).toDateString()
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText primary={this.state.user.about} />
            </ListItem>
          </List>
        ) : null}
      </Paper>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
