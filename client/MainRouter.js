import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home';
import Users from './user/Users';
import SignUp from './user/Signup';

class MainRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </div>
        )
    }
}

export default MainRouter;