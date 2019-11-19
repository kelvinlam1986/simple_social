import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import seashellImg from "./../assets/images/seashell.jpg";
import auth from "../auth/auth-helper";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing.unit * 5
  },
  title: {
    padding: `${theme.spacing.unit * 3}px	${theme.spacing.unit * 2.5}px	
        ${theme.spacing.unit * 2}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 330
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultPage: true };
  }

  init = () => {
    if (auth.isAuthenticated()) {
      this.setState({ defaultPage: false });
    } else {
      this.setState({ defaultPage: true });
    }
  };

  componentWillReceiveProps = () => {
    this.init();
  };

  componentDidMount = () => {
    this.init();
  };

  render() {
    const { classes } = this.props;
    const { defaultPage } = this.state;
    return (
      <div className={classes.root}>
        {defaultPage && (
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Typography
                type="headline"
                component="h2"
                className={classes.title}
              >
                Home Page
              </Typography>
              <CardMedia
                className={classes.media}
                image={seashellImg}
                title="Unicorn Shells"
              />
              <CardContent>
                <Typography type="body1" component="p">
                  Welcome to the MINH Martket Place home page.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        )}
        {!defaultPage && (
          <Grid container spacing={24}>
            <Grid item xs={8} sm={7}>
              <Link to="/seller/shop/new">
                <Button variant="contained">New Shop</Button>
              </Link>
            </Grid>
            <Grid item xs={6} sm={5}>
              World
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
