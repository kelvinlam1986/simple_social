import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { list } from './api-user'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing.unit,
        margin: theme.spacing.unit * 5
    }),
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
        color: theme.palette.openTitle
    }
});


class Users extends Component {
    state = { user: [] };

    componentDidMount()  {
        list().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users: data })
            }
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    All Users
                </Typography>
                <List dense>
                    {
                        this.state.users !== undefined ?
                        this.state.users.map(function (item, i) {
                            return (
                                <Link key={item._id} to={"/user/" + item._id}>
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Person />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.name} />
                                        <ListItemSecondaryAction>
                                            <IconButton>
                                                <ArrowForward />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                </Link>
                            );
                        }) : null
                    }
                </List>
            </Paper>
        )
    }
}


Users.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Users);