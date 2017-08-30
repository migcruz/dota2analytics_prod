import React from 'react';
import HomeNavbar from './components/HomeNavbar';
import HeroGrid from './components/HeroGrid';
import FetchDemo from './components/FetchDemo';
import { CSSTransitionGroup } from 'react-transition-group';

class Home extends React.Component {
  	render() {
		const staticRoot = window.django.urls.staticRoot;
    	return (
             <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
          		<div className="Home">
    				<HomeNavbar/>
            		<div className="Home-header">
              			<img src={`${staticRoot}dota2assets/img/dota2logo.png`} className="Home-logo" alt="logo" />
              			<h2 className="heading">
    	    				Dota 2 Analytics Under construction -Miguel
    	  				</h2>
            		</div>
           			<p className="Home-intro">
              			I hope to release this ASAP.
            		</p>
    				<div className="Home-grid">
    					<HeroGrid/>
    				</div>
          		</div>
            </CSSTransitionGroup>
    	);
  	}
}

export default Home;
