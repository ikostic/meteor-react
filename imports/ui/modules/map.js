import React from 'react';

export class Map extends React.Component {
	render (){
		var props = this.props;
		return React.createElement('div', { className: 'mdl-grid' },
			React.createElement('div', { className: 'mdl-cell mdl-cell--12-col' },
				React.createElement('h4', null, 'Map'),
				React.createElement('p', null, 'This is map page')
			)
		);
	}
}
