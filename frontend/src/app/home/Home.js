import React from 'react';
import HomeNavbar from './components/HomeNavbar';

class Home extends React.Component {
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
      </div>
    );
  }
}

export default Home;
