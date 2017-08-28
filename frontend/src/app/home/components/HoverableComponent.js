import React from 'react';


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
      	this.setState({text : 'LOL'})
    }
    render () {
       const {text} = this.state;
       return (
        	<div 
           		onMouseEnter={this.onMouseover.bind(this)}
           		onMouseLeave={this.onMouseout.bind(this)}>{text}
			</div>
       )
    }
}

export default HoverableComponent;