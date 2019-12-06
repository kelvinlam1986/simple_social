import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Avatar } from "@material-ui/core";
import { read } from "./api-shop";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    marginTop: 100
  },
  card: {
    textAlign: "center",
    paddingBottom: theme.spacing.unit * 2
  },
  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.protectedTitle,
    fontSize: "1.2em"
  },
  bigAvatar: {
    width: 100,
    height: 100,
    margin: "auto"
  },
  subheading: {
    marginTop: theme.spacing.unit,
    color: theme.palette.openTitle
  }
});

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = { shop: "" };
    this.match = props.match;
  }

  componentDidMount = () => {
    read({ shopId: this.match.params.shopId }, null).then(res => {
      if (!res.error) {
        this.setState({ shop: res });
      }
    });
  };
  render() {
    const { classes } = this.props;
    const { shop } = this.state;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              type="headline"
              component="h2"
              className={classes.title}
            >
              {shop.name}
            </Typography>
            <br />
            <Avatar className={classes.bigAvatar} />
            <br />
            <Typography
              type="subheading"
              component="h2"
              className={classes.subheading}
            >
              {shop.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Shop.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shop);
