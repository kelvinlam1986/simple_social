import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Grid,
  SwipeableDrawer,
  List,
  ListItem,
  Badge,
  Icon
} from "@material-ui/core";
import {
  Home,
  ShoppingCart,
  Menu,
  Shop,
  SupervisedUserCircleOutlined,
  PersonAdd,
  Accessibility,
  Book
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { withRouter, Link } from "react-router-dom";
import auth from "../auth/auth-helper";

const style = theme => ({
  menu: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize
  }
});

const isActive = (history, path, isResponsive = false) => {
  if (history.location.pathname === path) {
    return { color: "#ff4081" };
  } else {
    return isResponsive ? { color: "blue" } : { color: "#ffffff" };
  }
};

const isPartActive = (history, path, isResponsive = false) => {
  if (history.location.pathname.includes(path)) {
    return { color: "#ff4081" };
  } else {
    return isResponsive ? { color: "blue" } : { color: "#ffffff" };
  }
};

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { drawer: false, drawerActivate: false };
  }

  componentDidMount = () => {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  };

  createDrawer = () => {
    const { history, classes } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Menu
                style={{ padding: 0, color: "right", cursor: "pointer" }}
                onClick={() => {
                  console.log("On clicked menu");
                  this.setState({ drawer: true });
                }}
              ></Menu>
              <Typography type="title" color="inherit">
                MINH Market Place
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.drawer}
          onOpen={() => this.setState({ drawer: true })}
          onClose={() => this.setState({ drawer: false })}
          className={classes.menu}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawer: false });
            }}
            onKeyDown={() => {
              this.setState({ drawer: false });
            }}
          >
            <List style={{ width: 200 }}>
              <ListItem key={1} divider>
                <Link to="/">
                  <IconButton
                    key={1}
                    arial-label="Home"
                    style={isActive(history, "/", true)}
                  >
                    <Home />
                  </IconButton>
                  Home
                </Link>
              </ListItem>
              <ListItem key={2} divider>
                <Link to="/shops/all">
                  <IconButton
                    key={2}
                    arial-label="All Shop"
                    style={isActive(history, "/shops/all", true)}
                  >
                    <Shop />
                  </IconButton>
                  All Shop
                </Link>
              </ListItem>
              <ListItem key={3} divider>
                <Link to="/cart">
                  <IconButton
                    key={3}
                    arial-label="Cart"
                    style={isActive(history, "/cart", true)}
                  >
                    <Badge
                      color="secondary"
                      badgeContent={10}
                      style={{ marginLeft: "7px" }}
                    >
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                  Cart
                </Link>
              </ListItem>
              {!auth.isAuthenticated() && (
                <React.Fragment>
                  <ListItem key={4} divider>
                    <Link to="/signup">
                      <IconButton
                        style={isActive(history, "/signup", true)}
                        arial-label="Sign up"
                        key={4}
                      >
                        <PersonAdd />
                      </IconButton>
                      Sign up
                    </Link>
                  </ListItem>
                  <ListItem key={5} divider>
                    <Link to="/signin">
                      <IconButton
                        style={isActive(history, "/signin", true)}
                        arial-label="Sign in"
                        key={5}
                      >
                        <Accessibility />
                      </IconButton>
                      Sign in
                    </Link>
                  </ListItem>
                </React.Fragment>
              )}
              {auth.isAuthenticated() && (
                <React.Fragment>
                  {auth.isAuthenticated().user.seller && (
                    <React.Fragment>
                      <ListItem key={6} divider>
                        <Link to="/seller/shops">
                          <IconButton
                            style={isPartActive(history, "/seller/", true)}
                            arial-label="My shop"
                            key={6}
                          >
                            <Shop />
                          </IconButton>
                          My Shop
                        </Link>
                      </ListItem>
                    </React.Fragment>
                  )}
                  <ListItem key={7} divider>
                    <Link to={"/user/" + auth.isAuthenticated().user._id}>
                      <IconButton
                        style={isActive(
                          history,
                          "/user/" + auth.isAuthenticated().user._id,
                          true
                        )}
                        arial-label="My Profile"
                        key={7}
                      >
                        <Book />
                      </IconButton>
                      My Profile
                    </Link>
                  </ListItem>
                  <ListItem key={8} divider>
                    <Button
                      color="inherit"
                      onClick={() => {
                        auth.signout(() => history.push("/"));
                      }}
                    >
                      Sign Out
                    </Button>
                  </ListItem>
                </React.Fragment>
              )}
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  };

  // larger screen
  destroyDrawer = () => {
    const { history } = this.props;
    return (
      <AppBar>
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
                    <Button style={isActive(history, "/signup")}>
                      Sign Up
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button style={isActive(history, "/signin")}>
                      Sign In
                    </Button>
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
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(style)(ResponsiveMenu));
