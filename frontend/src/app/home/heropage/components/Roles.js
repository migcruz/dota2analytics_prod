import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import { VictoryChart, VictoryBar, VictoryStack, VictoryPolarAxis, VictoryTheme } from 'victory'; 


const staticRoot = window.django.urls.staticRoot;
const role_ticks = {0: "Carry", 40: "Escape", 80: "Pusher", 120: "Jungler", 160: "Disabler", 200: "Support", 240: "Initiator", 280: "Nuker", 320: "Durable"};
const role_array = ["Carry", "Escape", "Pusher", "Jungler", "Disabler", "Support", "Initiator", "Nuker", "Durable"];

class Roles extends React.Component {

    constructor(props) {
        super(props);
        this.roles = this.props.roles;

        this.role_data = [
            { x: 0, y: 0 },
            { x: 40, y: 0 },
            { x: 80, y: 0 },
            { x: 120, y: 0 },
            { x: 160, y: 0 },
            { x: 200, y: 0 },
            { x: 240, y: 0 },
            { x: 280, y: 0 },
            { x: 320, y: 0 }
        ];

        {/* so that the chart has a range up to 3 even if hero roles only has a max of "2" */}
        this.role_data_dummy = [
            { x: 0, y: 3 },
            { x: 40, y: 3 },
            { x: 80, y: 3 },
            { x: 120, y: 3 },
            { x: 160, y: 3 },
            { x: 200, y: 3 },
            { x: 240, y: 3 },
            { x: 280, y: 3 },
            { x: 320, y: 3 }
        ];
       
        for (var role in this.roles){
            var role_level = this.roles[role];
            for (var i = 0; i < role_array.length; i++){
                if (role == role_array[i]){
                    this.role_data[i]["y"] = role_level;
                }
            }
        }
    }

  	render() {
    	return (
            <div>
                <svg>
                    <defs>
                        <linearGradient id="gradient1" 
                            x1="0%" y1="0%" x2="0%" y2="100%"
                        >
                            <stop offset="0%"   stopColor="orange"/>
                            <stop offset="100%" stopColor="red"/>
                        </linearGradient>

                    </defs>
                </svg>
                <VictoryChart polar theme={VictoryTheme.material} domainPadding={{ y: 10 }}>
                            
                    <VictoryPolarAxis
                        tickValues={_.keys(role_ticks).map((k) => +k)}
                        tickFormat={_.values(role_ticks)}
                        labelPlacement="vertical"
                        style={{ 
                            tickLabels: { fill: "white" },
                            axis: { stroke: "grey", strokeWidth: 0.5},
                            grid: { stroke: "grey", strokeWidth: 0.1, opacity: 1 },
                            axisLabel: {fill: "black"}
                        }}
                    />
                    <VictoryBar
                        style={{ data: { fill: "none", width: 40 } }}
                        data={this.role_data_dummy}
                    />
                    <VictoryStack
                        colorScale={[
                            "url(#gradient1)", 
                            ]}>
                        <VictoryBar
                            style={{ data: { width: 40 } }}
                            data={this.role_data}
                        />
                    </VictoryStack>         
                </VictoryChart>
            </div>
    	);
 	}
}

export default Roles;
