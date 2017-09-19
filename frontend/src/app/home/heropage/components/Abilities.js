import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import axios from 'axios';


const staticRoot = window.django.urls.staticRoot;

class Abilities extends React.Component {

    constructor(props) {
        super(props);
        this.abilities = this.props.skills;
        this.state = {abilities_list: {}};
        this.b = 4;
    }

    componentDidMount() {
        // axios.get(`http://127.0.0.1:8000/api/heroes/${this.hero_id}/?format=json`)
        //   .then(res => {
        //     this.setState({hero_json: res.data});
        // });
    }

  	render() {
        console.log(this.abilities)
    	return (
            <Grid>
                <Grid.Row columns={4} key={this.b.toString()} centered>
                    <Grid.Column key={"am1"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>{this.abilities[0]["ability_info"]["dname"]}</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}${this.abilities[0]["ability_info"]["img"]}`} alt="skill"/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column key={"am2"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>{this.abilities[1]["ability_info"]["dname"]}</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}${this.abilities[1]["ability_info"]["img"]}`} alt="skill"/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column key={"am3"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>{this.abilities[2]["ability_info"]["dname"]}</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}${this.abilities[2]["ability_info"]["img"]}`} alt="skill"/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column key={"am4"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>{this.abilities[3]["ability_info"]["dname"]}</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}${this.abilities[3]["ability_info"]["img"]}`} alt="skill"/>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
    	);
 	}
}

export default Abilities;
