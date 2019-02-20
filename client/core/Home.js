import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import seashellImg from './../assets/images/seashell.jpg';
import { Link } from 'react-router-dom';

const styles = theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing.unit * 5
    },
    title:	{
        padding:`${theme.spacing.unit	*	3}px	${theme.spacing.unit	*	2.5}px	
        ${theme.spacing.unit	*	2}px`,
        color:	theme.palette.text.secondary
    },
    media:	{
        minHeight:	330
    }

});

class Home extends Component {
    render() {
        const { classes } = this.props;
        return ( 
            <Card className={classes.card}>
                <CardHeader title="Home Page" />
                <CardMedia className={classes.media}
                            image={seashellImg}
                            title="Home page"/>
                <CardContent>
                    <Typography type="body1" component="p">
                        Welcome to the MERN Skeleton home page.
                    </Typography>
                </CardContent>
                <Link to="/users">Users</Link>
                <Link to="/signup">Sign up</Link>
                <Link to="/signin">Sign in</Link>
                <Link to="/user/5c6cec1e18dde56d798f8293">Profile</Link>
                <Link to="/user/edit/5c6cec1e18dde56d798f8293">Edit Profile</Link>
            </Card>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);