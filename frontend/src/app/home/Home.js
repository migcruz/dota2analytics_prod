import React from 'react';
import HomeNavbar from './components/HomeNavbar';
import HeroGrid from './components/HeroGrid';

class Home extends React.Component {
<<<<<<< HEAD
  	render() {
		const staticRoot = window.django.urls.staticRoot;
		return (
			<div className="Home">
				<HomeNavbar/>
				<div className="Home-header">
					<img src={`${staticRoot}adminlte/img/logo.svg`} className="Home-logo" alt="logo" />
					<h2 className="heading">
						Dota 2 Analytics Under construction -Miguel
					</h2>
				</div>
				<p className="Home-intro">
					I hope to release this ASAP.
				</p>
				<HeroGrid/>
			</div>
    	);
  	}
=======
  render() {
	const staticRoot = window.django.urls.staticRoot;
    return (
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
	<HeroGrid/>
      </div>
    );
  }
>>>>>>> 0f50048ad2d36ef74ddffb50ef342d90095c1ef4
}

export default Home;
