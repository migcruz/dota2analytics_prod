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

const hero_icon_paths2 = [
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
    `${staticRoot}home/img/image.png`,
];

var columns = [];
for (var i = 0; i < hero_icon_paths.length; i++){
	columns.push(
		<Grid.Column>
            <div className="HeroGrid-wrapper">
                <div className="HeroGrid-hero">
                    <Image src={hero_icon_paths[i]} />
                </div>
            </div>
		</Grid.Column>
	);
}


class HeroGrid extends React.Component {
	render() {		
    	return (
			<Grid>
		  		<Grid.Row columns={15} centered>
		    		{columns}
		  		</Grid.Row>
		  		<Grid.Row columns={15} centered>
		    		{columns}
		  		</Grid.Row>
		  		<Grid.Row columns={15} centered>
		    		{columns}
		  		</Grid.Row>
			</Grid>
    	);
  	}
}




class HoverableComponent extends React.Component {
    constructor() {
      super();
      this.state = { text : '' }
    }
    //set the text
    onMouseover (e) {
      this.setState({text : 'some text'})
    }
    //clear the text
    onMouseout (e) {
      this.setState({text : ''})
    }
    render () {
       const {text} = this.state;
       return (
         <div 
           onMouseEnter={this.onMouseover.bind(this)}
           onMouseLeave={this.onMouseout.bind(this)}>{text}</div>
       )
    }
 }
 
 
export default HeroGrid;

