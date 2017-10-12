import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import axios from 'axios';


const staticRoot = window.django.urls.staticRoot;

class Roles extends React.Component {

    constructor(props) {
        super(props);
        this.roles = this.props.roles;

        this.roles_row;
        var row = [];

        for (var role in this.roles){
            var role_level = this.roles[role];
            row.push(
                <Grid.Column key={this.roles[role]}>
                    <div>
                        <h4>{role}</h4>
                        <h4>{role_level}</h4>
                    </div>
                </Grid.Column>
            );

        }
        this.roles_row =  <Grid.Row columns={15} key="ability_row" centered>
                                {row}
                            </Grid.Row>
    }

  	render() {
    	return (
            <Grid>
                {this.roles_row}
            </Grid>
    	);
 	}
}

export default Roles;
