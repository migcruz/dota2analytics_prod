import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

const staticRoot = window.django.urls.staticRoot;

class Abilities extends React.Component {

    constructor(props) {
        super(props);
        this.b = 4;
    }

  	render() {

    	return (
            <Grid>
                <Grid.Row columns={4} key={this.b.toString()} centered>
                    <Grid.Column key={"am1"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>am1</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}dota2assets/img/spellicons/antimage_mana_break.png`}/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column key={"am2"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>am2</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}dota2assets/img/spellicons/antimage_mana_break.png`}/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column key={"am3"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>am3</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}dota2assets/img/spellicons/antimage_mana_break.png`}/>
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column key={"am4"}>
                        <div className="HeroGrid-wrapper">
                            <div className="HeroGrid-name">
                                <h5>am4</h5>
                            </div>
                            <div className="HeroGrid-hero">
                                <Image src={`${staticRoot}dota2assets/img/spellicons/antimage_mana_break.png`}/>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
    	);
 	}
}

export default Abilities;
