import React from 'react';

export class Home extends React.Component {
	render (){
		var props = this.props;
		const signedInMsg = props.signedIn ? 'You are signed in' : 'You are not signed in';
		return React.createElement('div', { className: 'mdl-grid' },
			React.createElement('div', { className: 'mdl-cell mdl-cell--12-col' },
				React.createElement('h4', null, 'Welcome'),
				React.createElement('p', null, 'This is homepage and ' + signedInMsg),
				React.createElement('p', null, 'Stat: ' + props.signedIn)
			)
		);
	}
}
