import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import axios from 'axios';


const staticRoot = window.django.urls.staticRoot;

class Abilities extends React.Component {

    constructor(props) {
        super(props);
        this.abilities = this.props.skills;

        this.ability_row;
        this.special_ability_row;
        var row = [];
        var special_row = [];

        for (var i = 0; i < this.abilities.length; i++){
            var is_special = false;
            for (var j =0; j < this.abilities[i]["ability_info"]["behavior"].length; j++){
                if (this.abilities[i]["ability_info"]["behavior"][j] == "Hidden"){
                    is_special = true;
                }
            }
            if (is_special){
                special_row.push(
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
            else {
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
        }
        this.ability_row =  <Grid.Row columns={10} key="ability_row" centered>
                                {row}
                            </Grid.Row>
        this.special_ability_row =  <Grid.Row columns={10} key="special_ability_row" centered>
                                        {special_row}
                                    </Grid.Row>
    }

  	render() {
        console.log(this.abilities)
    	return (
            <Grid>
                {this.ability_row}
                {this.special_ability_row}
            </Grid>
    	);
 	}
}

export default Abilities;
