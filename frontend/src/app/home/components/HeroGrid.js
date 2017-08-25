import React from 'react';
import {Grid, Image} from "semantic-ui-react";


const staticRoot = window.django.urls.staticRoot;
const hero_icon_paths = [
    `${staticRoot}dota2assets/img/heroes/abaddon.png`,
    `${staticRoot}dota2assets/img/heroes/slardar.png`,
    `${staticRoot}dota2assets/img/heroes/slark.png`,
	`${staticRoot}dota2assets/img/heroes/huskar.png`,
	`${staticRoot}dota2assets/img/heroes/invoker.png`,
	`${staticRoot}dota2assets/img/heroes/roshan.png`,
	`${staticRoot}dota2assets/img/heroes/lina.png`,
	`${staticRoot}dota2assets/img/heroes/medusa.png`,
	`${staticRoot}dota2assets/img/heroes/morphling.png`,
	`${staticRoot}dota2assets/img/heroes/nevermore.png`,
	`${staticRoot}dota2assets/img/heroes/chen.png`,
	`${staticRoot}dota2assets/img/heroes/clinkz.png`,
	`${staticRoot}dota2assets/img/heroes/luna.png`,
	`${staticRoot}dota2assets/img/heroes/rubick.png`,
	`${staticRoot}dota2assets/img/heroes/razor.png`
]; 

var columns = [];
for (var i = 0; i < hero_icon_paths.length; i++){
	columns.push(
		<Grid.Column>
			<Image src={hero_icon_paths[i]} />
		</Grid.Column>
	);
}


class HeroGrid extends React.Component {
	render() {		
    	return (
			<Grid>
		  		<Grid.Row columns={15}>
		    		{columns}
		  		</Grid.Row>

		  		<Grid.Row columns={15}>
		    		{columns}
		  		</Grid.Row>

		  		<Grid.Row columns={15}>
		    		{columns}
		  		</Grid.Row>
			</Grid>
    	);
  	}
}

export default HeroGrid;

