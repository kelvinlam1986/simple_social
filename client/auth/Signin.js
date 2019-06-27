import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import { signin } from "./api-auth";
import auth from "./auth-helper";

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    fontSize: "2em"
  },
  card: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "center",
    marginTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 2
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  error: {
    verticalAlign: "middle"
  },
  submit: {
    margin: "auto",
    marginBottom: theme.spacing.unit * 2
  },
  buttonProgress: {
    color: theme.palette.text.secondary,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      redirectToReferer: false,
      loading: false
    };
  }

  clickSubmit = () => {
    const user = {
      email: this.state.email || undefined,
      password: this.state.password || undefined
    };
    this.setState({ loading: true });
    signin(user).then(data => {
      this.setState({ loading: false });
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        auth.authenticate(data, () => {
          this.setState({ redirectToReferer: true });
        });
      }
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { from } = this.props.location.state || {
      from: {
        pathname: "/"
      }
    };

    const { redirectToReferer } = this.state;
    if (redirectToReferer) {
      return <Redirect to={from} />;
    }

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography type="headline" component="h1" className={classes.title}>
            Đăng nhập
          </Typography>
          <TextField
            id="email"
            label="Email của bạn"
            type="email"
            className={classes.textField}
            onChange={this.handleChange("email")}
            value={this.state.email}
            margin="normal"
          />{" "}
          <br />
          <TextField
            id="password"
            label="Password của bạn"
            type="password"
            className={classes.textField}
            onChange={this.handleChange("password")}
            value={this.state.password}
            margin="normal"
          />{" "}
          <br />
          {this.state.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={classes.error}>
                error
              </Icon>
              {this.state.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={this.clickSubmit}
            className={classes.submit}
          >
            Đăng nhập
          </Button>
          {this.state.loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(SignIn);
