import React from "react";

import {Route, Switch} from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';
import RouteNotFound from "app/components/RouteNotFound";
import Home from "app/home/Home"
import FetchDemo from "app/home/components/FetchDemo";
import HoverableComponent from "app/home/components/HoverableComponent";
import HomeNavbar from "app/home/components/HomeNavbar";

const urls = (
	<Route render={({ location, history, match }) => (
		<div>
			<HomeNavbar/>
			<CSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}>
				<div key={location.pathname}>
					<Switch location={location}>
						<Route exact path="/app" component={Home}/>
						<Route path="/app/lol" component={HoverableComponent}/>
						<Route path="/app/kek" component={FetchDemo}/>
					</Switch>
				</div>
			</CSSTransitionGroup>
		</div>
    )}/>

);

export default urls;


{/*<Route path="*" component={RouteNotFound}/>*/}

{/* <Route render={({ location, history, match }) => (
		<div>
			<CSSTransitionGroup
				transitionName="fade"
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}>
				<Switch key={location.key} location={location}>
					<Route exact path="/app" component={Home} location={location} key={location.key}/>
					<Route exact path="/app/lol" component={HoverableComponent} location={location} key={location.key}/>
				</Switch>
			</CSSTransitionGroup>
		</div>
	)}/> */}
	
{/* <Switch>
		<Route exact path="/app" component={Home}/>
		<Route exact path="/app/lol" component={HoverableComponent}/>
		<Route exact path="/app/kek" component={FetchDemo}/>
	</Switch>

https://github.com/marnusw/react-css-transition-replace
*/}


	{/*<CSSTransitionGroup
	transitionName="example"
	transitionAppear={true}
	transitionAppearTimeout={500}
	transitionEnter={true}
	transitionLeave={true}
	transitionEnterTimeout={500}
	transitionLeaveTimeout={300}>
	<div key={location.pathname}>*/}