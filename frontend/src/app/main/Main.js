import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Main extends React.Component {
  	render() {
    	return (
      		<div>
				<CSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                    {React.cloneElement(this.props.children, {
                        key: location.pathname
                    })}
                </CSSTransitionGroup>
      		</div>
    	);
  	}
}

export default Main;
