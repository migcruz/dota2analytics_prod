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
                        <div style={{boxShadow: '1px 1px 5px #323131 inset'}}>
                            <div className="HeroGrid-wrapper">
                                <div className="HeroGrid-name">
                                    <h5>{this.abilities[i]["ability_info"]["dname"]}</h5>
                                </div>
                                <div className="HeroGrid-hero">
                                    <Image src={`${staticRoot}${this.abilities[i]["ability_info"]["img"]}`} alt="skill"/>
                                </div>
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
                                {/* Put box shadow after image to give effect https://stackoverflow.com/questions/21414925/why-doesnt-inset-box-shadow-work-over-images */}
                                <Image src={`${staticRoot}${this.abilities[i]["ability_info"]["img"]}`} alt="skill"/>
                                <div style={{boxShadow: '0 1px 0 rgba(255,255,255,.2), inset 0 4px 5px rgba(0,0,0,.6), inset 0 0.5px 0 rgba(0,0,0,.6)', position: 'absolute', width: '100%', height: '100%', top: '0', left: '0'}}/>
                            </div>
                        </div>
                    </Grid.Column>
                );
            }     
        }
        this.ability_row =  <Grid.Row columns={15} key="ability_row" centered>
                                {row}
                            </Grid.Row>
        this.special_ability_row =  <Grid.Row columns={15} key="special_ability_row" centered>
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
