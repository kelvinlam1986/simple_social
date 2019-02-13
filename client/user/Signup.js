import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import { create } from './api-user';

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 2
    },
    title: {
        marginTop: theme.spacing.unit * 2,
        color: theme.palette.text.secondary
    },
    error: {
        verticalAlign: 'middle'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: theme.spacing.unit * 2
    }
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', password: '', email: '', open: false, error: ''};
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    clickSubmit = () => {
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        };

        create(user).then((data) => {
            if (data.error) {
                this.setState({ error: data.error });
            } else {
                this.setState({ error: '', open: true });
            }
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardHeader title="Sign Up" />
                    <CardContent>
                        
                        <TextField id="name" label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal" /> <br />
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
                            this.state.error && (
                                <Typography component="p" color="error">
                                    <Icon color="error" className={classes.error}>error</Icon>
                                    {this.state.error}
                                </Typography>
                            )
                        }
                    </CardContent>
                    <CardActions>
                        <Button  color="primary" raised="raised" onClick={this.clickSubmit}
                            className={classes.submit}>Submit</Button>
                    </CardActions>
                </Card>
                <Dialog open={this.state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button color="primary" autoFocus="autoFocus" variant="raised">
                                Sign In
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
           
        );

    }
}

export default withStyles(styles)(SignUp);
