import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class HoverableComponent extends React.Component {
    render () {
        return (
        	 <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <h1>FADING</h1>
            </CSSTransitionGroup>
       );
    }
}

export default HoverableComponent;