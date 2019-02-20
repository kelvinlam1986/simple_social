import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link  } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Person from '@material-ui/icons/Person';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import auth from '../auth/auth-helper';
import { read } from '../user/api-user';
import DeleteUser from './DeleteUser';

const styles = theme => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 5
    }),
    title: {
        margin: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 2}px`,
        color: theme.palette.protectedTitle
    }
})

class Profile extends Component {
    constructor({match}) {
        super();
        this.state = { user: '', redirectToSignIn: false };
        this.match = match;
    }

    init = (userId) => {
        const jwt = auth.isAuthenticated();
        read({ userId: userId },
            { t: jwt.token }).then((data) => {
                if (data.error) {
                    this.setState({ redirectToSignIn: true });
                } else {
                    this.setState({ user: data });
                }
            });
    }

    componentDidMount = () => {
        this.init(this.match.params.userId);
    }

    componentWillReceiveProps = (props) => {
        this.init(props.match.params.userId);
    }

    render() {
        const { classes } = this.props;
        const redirectToSignIn = this.state.redirectToSignIn;
        if (redirectToSignIn) {
            <Redirect to="/signin" />
        }
        console.log('token', auth.isAuthenticated(),  'auth user id',auth.isAuthenticated().user._id, 'state user id', this.state.user._id)
        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>Profile</Typography>
                <List dense>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Person />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={this.state.user.name} secondary={this.state.user.email} />
                        {
                            auth.isAuthenticated().user && auth.isAuthenticated().user._id == this.state.user._id && (
                                <ListItemSecondaryAction>
                                    <Link to={"/user/edit/" + this.state.user._id}>
                                        <IconButton color="primary">
                                            <Edit />
                                        </IconButton>
                                    </Link>
                                    <DeleteUser userId={this.state.user._id} />
                                </ListItemSecondaryAction>
                            )
                        }
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary={"Joined: " + (new Date(this.state.user.created)).toDateString()} />
                    </ListItem>
                </List>
            </Paper>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Profile);