import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Redirect, Link } from "react-router-dom";
import {
  Paper,
  Typography,
  Button,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { AccountCircle, Edit } from "@material-ui/icons";

import auth from "../auth/auth-helper";
import { listByOwner } from "./api-shop";

const styles = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: "auto",
    padding: theme.spacing.unit * 3,
    marginTop: 100
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 3}px ${
      theme.spacing.unit
    }px`,
    color: theme.palette.protectedTitle,
    fontSize: "1.2em"
  },
  addButton: {
    float: "right"
  },
  leftIcon: {
    marginRight: "8px"
  }
});

class MyShops extends Component {
  constructor(props) {
    super(props);
    this.state = { redirectToSignIn: false, shops: [] };
  }

  componentDidMount = () => {
    this.loadShops();
  };

  loadShops = () => {
    const jwt = auth.isAuthenticated();
    listByOwner(
      { userId: jwt.user._id },
      {
        t: jwt.token
      }
    ).then(data => {
      if (data.error) {
        this.setState({ redirectToSignIn: true });
      } else {
        this.setState({ shops: data });
      }
    });
  };

  render() {
    const { classes } = this.props;
    const { redirectToSignIn } = this.state;
    if (redirectToSignIn) {
      return <Redirect to="/signin" />;
    }

    return (
      <React.Fragment>
        <Paper elevation={4} className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            Your Shops
            <span className={classes.addButton}>
              <Link to="/seller/shop/new">
                <Button color="primary" variant="contained">
                  <Icon className={classes.leftIcon}>add_box</Icon>
                  New Shop
                </Button>
              </Link>
            </span>
          </Typography>
          <List dense>
            {this.state.shops.map((shop, i) => {
              return (
                <ListItem button key={i}>
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <AccountCircle></AccountCircle>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={shop.name}
                    secondary={shop.description}
                  ></ListItemText>
                  {auth.isAuthenticated().user &&
                    auth.isAuthenticated().user._id == shop.owner._id && (
                      <ListItemSecondaryAction>
                        <Link
                          to={"/seller/orders/" + shop.name + "/" + shop._id}
                        >
                          <Button aria-label="Orders" color="primary">
                            Orders
                          </Button>
                        </Link>
                        <Link to={"/seller/shop/edit/" + shop._id}>
                          <IconButton aria-label="Edit" color="primary">
                            <Edit />
                          </IconButton>
                        </Link>
                      </ListItemSecondaryAction>
                    )}
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </React.Fragment>
    );
  }
}

MyShops.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyShops);
