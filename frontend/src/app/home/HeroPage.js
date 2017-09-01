import React from 'react';
import HeroCard from './components/HeroCard';


class HeroPage extends React.Component {

	constructor(props) {
        super(props);
        this.hero_name = this.props.match.params.hero;
	}
	
  	render() {
		const staticRoot = window.django.urls.staticRoot;
    	return (

			<div>
				<div className="HeroPage-header">					
					<HeroCard name={this.hero_name}/>					
				</div>
				<h1> LOL </h1>
			</div>
            
    	);
  	}
}

export default HeroPage;
