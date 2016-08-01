import { createContainer } from 'meteor/react-meteor-data';

import settings from '../../../config/settings.js';
import { AppLayout }  from '../layouts/app_layout';
//import { } from '../../api/collections';
require('material-design-lite/material.min.css');
require('material-design-lite/material.min.js');

var initialHeaderTitle = settings.general.defaultHeaderTitle;
headerTitle = null;
export default createContainer(() => {
	//let headerTitle = headerTitle || settings.general.defaultHeaderTitle;
	//console.log(params);
	const signedIn = Meteor.user() !== null;
	setHeaderTitle = (title) => {
		headerTitle = title;
		//console.log(title);
		//this.setState({ headerTitle: title });
		document.getElementById('headerTitle').innerHTML = title;
	};
	return {
		headerTitle: headerTitle || initialHeaderTitle,
		drawerTitle: settings.general.defaultDrawerTitle,
		setHeaderTitle: setHeaderTitle,
		signedIn: signedIn
	};
}, AppLayout);