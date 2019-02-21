import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
import auth from '../auth/auth-helper';
import { read, update } from './api-user';

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


class EditProfile extends Component {
    constructor({match}) {
        super();
        this.state = {
            userId: '',
            name: '',
            email: '',
            password: '',
            redirectToProfile: false,
            redirectToUsers: false,
            error: ''
        }

        this.match = match;
    }

    componentDidMount = () => {
        const jwt = auth.isAuthenticated();
        console.log('jwt', jwt, 'token', jwt.totken);
        read({ userId: this.match.params.userId },
            {t: jwt.token}).then((data) => {
                if (data.error) {
                    this.setState({ error: data.error });
                } else {
                    this.setState({ name: data.name, email: data.email });
                }
            })

    }

    clickSubmit = () => {
        const jwt = auth.isAuthenticated();
        const user = {
            name: this.state.name || undefined,
            email: this.state.email || undefined,
            password: this.state.password || undefined
        }

        update({ userId: this.match.params.userId },
               { t: jwt.token}, user).then((data) => {
                   if (data.error) {
                       this.setState({ error: data.error })
                   } else {
                       this.setState({ userId: data._id, redirectToProfile: true })
                   }
               });
    }

    clickCancel = () => {
        this.setState({ redirectToUsers: true });
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { classes } = this.props;
        if (this.state.redirectToProfile) {
            return (<Redirect to={'/user/' + this.state.userId } />)
        }

        if (this.state.redirectToUsers) {
            return (<Redirect to={'/users' } />)
        }

        return (
            <Card className={classes.card}>
                <CardHeader title="Edit Profile" />
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
                    <Button color="primary" variant="contained" onClick={this.clickSubmit} className={classes.submit}>Submit</Button>
                    <Button color="secondary" variant="contained" onClick={this.clickSubmit} className={classes.submit}>Cancel</Button>
                </CardActions>
            </Card>
        )
    }
};

EditProfile.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfile);