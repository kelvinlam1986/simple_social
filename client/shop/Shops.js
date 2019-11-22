import React, { Component } from "react";
import { Link } from "react-router-dom";
import { list } from "./api-shop";
import {
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Paper,
  List
} from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const style = theme => ({
  root: theme.mixins.gutters({
    maxWidth: 600,
    margin: "auto",
    padding: theme.spacing.unit * 3,
    marginTop: 100,
    marginBottom: theme.spacing.unit * 3
  }),
  title: {
    margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
    color: theme.palette.protectedTitle,
    textAlign: "center",
    fontSize: "1.2em"
  },
  avatar: {
    width: 100,
    height: 100
  },
  subheading: {
    color: theme.palette.text.secondary
  },
  shopTitle: {
    fontSize: "1.2em",
    marginBottom: "5px"
  },
  details: {
    padding: "24px"
  }
});

class Shops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    };
  }

  componentDidMount = () => {
    this.loadShops();
  };

  loadShops = () => {
    list().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ shops: data });
      }
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper elevation={4} className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            All Shops
          </Typography>
          <List dense>
            {this.state.shops.map((shop, i) => {
              return (
                <Link to={"/shops/" + shop._id} key={i}>
                  <Divider />
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>
                        <AccountCircle></AccountCircle>
                      </Avatar>
                    </ListItemAvatar>
                    <div className={classes.details}>
                      <Typography
                        variant="headline"
                        component="h2"
                        color="primary"
                        className={classes.shopTitle}
                      >
                        {shop.name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        className={classes.subheading}
                      >
                        {shop.description}
                      </Typography>
                    </div>
                  </ListItem>
                  <Divider />
                </Link>
              );
            })}
          </List>
        </Paper>
      </div>
    );
  }
}

Shops.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Shops);
