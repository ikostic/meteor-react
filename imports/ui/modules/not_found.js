import React from 'react';

export const notFound = (props) => {
	//const signedInMsg = props.signedIn ? 'You are signed in' : 'You are not signed in';
	//console.log(props);
	return React.createElement('div', null,
		'Page not found (404)'
	);
};
