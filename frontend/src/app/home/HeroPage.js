import React from 'react';
import HeroCard from './components/HeroCard';
import {Embed} from "semantic-ui-react";

class HeroPage extends React.Component {

	constructor(props) {
        super(props);
        this.hero_name = this.props.match.params.hero;
	}
	
  	render() {
		const staticRoot = window.django.urls.staticRoot;
    	return (

			<div>
				<video autoPlay loop preload>
  					<source src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain2.webm`} type="video/webm"/>
				</video>				
				<h1> LOL </h1>
			</div>
            
    	);
  	}
}

export default HeroPage;


{/*<video src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`} autoplay loop/>*/}

{/*<video autoplay loop>
  					<source src={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`} type="video/webm"/>
				</video>*/}



{/*<Embed
    				url={`${staticRoot}dota2assets/npc_dota_hero_queenofpain.webm`}
  				/>*/}