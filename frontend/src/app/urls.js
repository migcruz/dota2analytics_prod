import React from "react";

import {Route, Switch} from "react-router-dom";

import Admin from "app/layouts/Admin";
import RouteNotFound from "app/components/RouteNotFound";
import Home from "app/home/Home"

const urls = (
	<main>
		<Switch>
			<Route exact path="/app" component={Home}/>
		</Switch>
	</main>
);

export default urls;


{/*<Route path="*" component={RouteNotFound}/>*/}