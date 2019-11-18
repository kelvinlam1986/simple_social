import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Home from "@material-ui/icons/Home";
import { withRouter, Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff4081" };
  } else {
    return { color: "#ffffff" };
  }
};

const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path)) {
    return { color: "#ff4081" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = withRouter(({ history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography type="title" color="inherit">
        MINH Market Place
      </Typography>
      <div>
        <Link to="/">
          <IconButton arial-label="Home" style={isActive(history, "/")}>
            <Home />
          </IconButton>
        </Link>
        <Link to="/shops/all">
          <Button style={isActive(history, "/shops/all")}>All Shops</Button>
        </Link>
        <Link to="/cart">
          <Button style={isActive(history, "/cart")}>
            Cart
            <Badge
              color="secondary"
              badgeContent={10}
              style={{ marginLeft: "7px" }}
            >
              <ShoppingCart></ShoppingCart>
            </Badge>
          </Button>
        </Link>
      </div>
      <div style={{ position: "absolute", right: "7px" }}>
        <span style={{ float: "right" }}>
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
              {auth.isAuthenticated().user.seller && (
                <Link to="/seller/shops">
                  <Button style={isPartActive(history, "/seller/")}>
                    My Shop
                  </Button>
                </Link>
              )}
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
        </span>
      </div>
    </Toolbar>
  </AppBar>
));

export default Menu;
