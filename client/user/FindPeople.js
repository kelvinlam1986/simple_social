import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Snackbar,
  withStyles,
  Hidden
} from "@material-ui/core";

import { Search, Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import { findPeople, follow } from "../user/api-user";
import MySnackbarContent from "../core/MyStackBarContent";

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    margin: 0
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit}px ${theme.spacing
      .unit * 2}px`,
    color: theme.palette.openTitle,
    fontSize: "1em"
  },
  avatar: {
    marginRight: theme.spacing.unit * 1
  },
  follow: {
    right: theme.spacing.unit * 2
  },
  snack: {
    color: theme.palette.openTitle
  },
  viewButton: {
    verticalAlign: "middle"
  }
});

class FindPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      open: false
    };
  }

  componentDidMount = () => {
    const jwt = auth.isAuthenticated();
    findPeople(
      {
        userId: jwt.user._id
      },
      {
        t: jwt.token
      }
    ).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  };

  clickFollow = (user, index) => {
    const jwt = auth.isAuthenticated();
    follow(
      {
        userId: jwt.user._id
      },
      {
        t: jwt.token
      },
      user._id
    ).then(data => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        let toFollow = this.state.users;
        toFollow.splice(index, 1);
        this.setState({
          users: toFollow,
          open: true,
          followMessage: `Following ${user.name}!`
        });
        this.props.updateAfterFollowState(true);
      }
    });
  };

  handleRequestClose = (event, reason) => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography type="title" className={classes.title}>
            Bạn muốn Follow ai nè
          </Typography>
          <List dense>
            {this.state.users.map((item, i) => {
              return (
                <span key={i}>
                  <ListItem>
                    <Hidden smDown>
                      <ListItemAvatar className={classes.avatar}>
                        <Avatar src={"/api/users/photo/" + item._id} />
                      </ListItemAvatar>
                    </Hidden>
                    <ListItemText primary={item.name} />
                    <ListItemSecondaryAction className={classes.follow}>
                      <Link to={"/user/" + item._id} style={{ float: "right" }}>
                        <IconButton variant="contained" color="secondary">
                          <Search />
                        </IconButton>
                      </Link>
                      <Hidden smUp>
                        <IconButton
                          variant="contained"
                          color="primary"
                          onClick={this.clickFollow.bind(this, item, i)}
                        >
                          <Favorite />
                        </IconButton>
                      </Hidden>
                      <Hidden smDown>
                        <Button
                          aria-label="Follow"
                          variant="contained"
                          color="primary"
                          onClick={this.clickFollow.bind(this, item, i)}
                        >
                          Follow
                        </Button>
                      </Hidden>
                    </ListItemSecondaryAction>
                  </ListItem>
                </span>
              );
            })}
          </List>
        </Paper>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.open}
          onClose={this.handleRequestClose}
          autoHideDuration={6000}
        >
          <MySnackbarContent
            variant="success"
            onClose={this.handleRequestClose}
            message={this.state.followMessage}
          />
        </Snackbar>
      </div>
    );
  }
}

FindPeople.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(FindPeople));
