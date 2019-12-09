import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import SignUp from "./user/Signup";
import SignIn from "./auth/Signin";
import Profile from "./user/Profile";
import EditProfile from "./user/EditProfile";
import PrivateRoute from "./auth/PrivateRoute";
import ResponsiveMenu from "./core/ResponsiveMenu";
import NewShop from "./shop/NewShop";
import Shops from "./shop/Shops";
import MyShops from "./shop/MyShops";
import Shop from "./shop/Shop";
import EditShop from "./shop/EditShop";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <ResponsiveMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
          <Route path="/user/:userId" component={Profile} />
          <PrivateRoute path="/seller/shop/new" component={NewShop} />
          <Route path="/shops/all" component={Shops} />
          <Route path="/shops/:shopId" component={Shop} />
          <PrivateRoute path="/seller/shops" component={MyShops} />
          <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop} />
        </Switch>
      </div>
    );
  }
}

export default MainRouter;
