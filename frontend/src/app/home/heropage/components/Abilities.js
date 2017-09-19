import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import axios from 'axios';


const staticRoot = window.django.urls.staticRoot;

class Abilities extends React.Component {

    constructor(props) {
        super(props);
        this.abilities = this.props.skills;
        this.b = 4;
        this.ability_row;
        var row = [];

        for (var i = 0; i < this.abilities.length; i++){     
            row.push(
                <Grid.Column key={this.abilities[i]["ability_name"]}>
                    <div className="HeroGrid-wrapper">
                        <div className="HeroGrid-name">
                            <h5>{this.abilities[i]["ability_info"]["dname"]}</h5>
                        </div>
                        <div className="HeroGrid-hero">
                            <Image src={`${staticRoot}${this.abilities[i]["ability_info"]["img"]}`} alt="skill"/>
                        </div>
                    </div>
                </Grid.Column>
            );
        }
        this.ability_row =  <Grid.Row columns={this.abilities.length} key="ability_row" centered>
                                {row}
                            </Grid.Row>
    }

  	render() {
        console.log(this.abilities)
    	return (
            <Grid>
                {this.ability_row}
            </Grid>
    	);
 	}
}

export default Abilities;
