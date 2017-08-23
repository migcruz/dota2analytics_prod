import React from "react";
import {IndexRedirect, Route} from "react-router";

import Admin from "app/layouts/Admin";
import RouteNotFound from "app/components/RouteNotFound";
import users from "app/users/urls";
import Home from "app/home/Home"

const urls = (
    <Route path="/">
        <IndexRedirect to="home"/>
        <Route component={Home} path="home"/>
        <Route component={Admin} path="admin">
            <IndexRedirect to="users"/>
            {users}
            <Route path="*" component={RouteNotFound}/>
        </Route>
    </Route>
);

export default urls;
