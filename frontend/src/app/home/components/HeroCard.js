import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'
import {NavLink} from "react-router-dom";


class HeroCard extends React.Component {
	constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


	render() {		
    	return (
			<Card>
                <Image src='/assets/images/avatar/large/daniel.jpg' />
                <Card.Content>
                <Card.Header>Daniel</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
                </Card.Content>
            </Card>
    	);
  	}
}

export default HeroCard;

{/* https://www.reddit.com/r/DotA2/comments/27d6vl/dota_2_animated_hero_portraits/ */}