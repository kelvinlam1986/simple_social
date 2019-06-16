import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Home from "@material-ui/icons/Home";
import { withRouter, Link } from "react-router-dom";
import auth from "../auth/auth-helper";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff4081" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        MINH Social
      </Typography>
      <Link to="/">
        <IconButton>
          <Home />
        </IconButton>
      </Link>
      <Link to="/users">
        <Button style={isActive(history, "/users")}>Users</Button>
      </Link>
      {!auth.isAuthenticated() && (
        <span>
          <Link to="/signup">
            <Button style={isActive(history, "/signup")}>Sign Up</Button>
          </Link>
          <Link to="/signin">
            <Button style={isActive(history, "/signin")}>Sign In</Button>
          </Link>
        </span>
      )}
      {auth.isAuthenticated() && (
        <span>
          <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button
              style={isActive(
                history,
                "/user/" + auth.isAuthenticated().user._id
              )}
            >
              My Profile
            </Button>
          </Link>
          <Button
            color="inherit"
            onClick={() => {
              auth.signout(() => history.push("/"));
            }}
          >
            Sign Out
          </Button>
        </span>
      )}
    </Toolbar>
  </AppBar>
));

export default Menu;
