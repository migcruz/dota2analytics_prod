import React from 'react';
import { ReactCSSTransitionGroup } from 'react-transition-group';

class HoverableComponent extends React.Component {
    render () {
        return (
        	 <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <h1>FADING</h1>
            </ReactCSSTransitionGroup>
       );
    }
}

export default HoverableComponent;