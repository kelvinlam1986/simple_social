import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Redirect  } from 'react-router-dom';
import { signin } from './api-auth';
import auth from './auth-helper';

const styles = theme => (
    {
        title: {
            marginTop: theme.spacing.unit * 2,
            color: theme.palette.text.secondary
        },
        card: {
            maxWidth: 600,
            margin: 'auto',
            marginTop: theme.spacing.unit * 5
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: 300
        },
        error: {
            verticalAlign: 'middle'
        },
        submit: {
            margin: 'auto',
            marginBottom: theme.spacing.unit * 2
        }
    }
);

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', redirectToReferer: false }
    }

    clickSubmit = () => {
        const user = {
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };
        
        signin(user).then((data) => {
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                auth.authenticate(data, () => {
                    this.setState({ redirectToReferer: true });
                })
            }
        })
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { classes } = this.props;
        const { from } = this.props.location.state || {
            from: {
                pathname: '/'
            }
        }

        const { redirectToReferer } = this.state;
        if (redirectToReferer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <Card className={classes.card}>
                <CardHeader title="Sign In" />
                <CardContent>
                    <TextField id="email" label="Email"
                            type="email"
                            className={classes.textField}
                            onChange={this.handleChange('email')}
                            value={this.state.email}
                            margin="normal" /> <br />
                    <TextField id="password" label="Password"
                            type="password"
                            className={classes.textField}
                            onChange={this.handleChange('password')}
                            value={this.state.password}
                            margin="normal" /> <br />
                    {
                        this.state.error && (<Typography component="p" color="error">
                        <Icon color="error" className={classes.error}>error</Icon>
                        {this.state.error}
                        </Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                </CardActions>
            </Card>
        )
    }


}

export default withStyles(styles)(SignIn);