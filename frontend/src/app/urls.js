import React from "react";

import {Route, Switch} from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';
import RouteNotFound from "app/components/RouteNotFound";
import Home from "app/home/Home"

const urls = (
	<Route render={({ location, history, match }) => (
		<div>
			<CSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout={700}
				transitionLeaveTimeout={700}>
				<Switch key={location.key} location={location}>
					<Route exact path="/app" component={Home} location={location} key={location.key}/>
					<Route exact path="/app/lol" component={Home} location={location} key={location.key}/>
				</Switch>
			</CSSTransitionGroup>
		</div>
    )}/>	
);

export default urls;


{/*<Route path="*" component={RouteNotFound}/>*/}