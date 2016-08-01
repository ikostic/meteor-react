import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount, withOptions } from 'react-mounter';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from '../../ui/containers/app_container';
import { Home } from '../../ui/modules/home';
import { Map } from '../../ui/modules/map';
import { notFound } from '../../ui/modules/not_found';

Meteor.startup(() => {
	injectTapEventPlugin();
	console.log('Meteor.startup');
});

Meteor.autorun(() => {
	console.log('Meteor.autorun');
});

const mountLayout = withOptions({
	rootId: 'react_root',
	rootProps: { className: 'root-container' }
}, mount);

// not found (404)
FlowRouter.notFound = {
	/*
	// Subscriptions registered here don't have Fast Render support.
	subscriptions: function() {

	},*/
	action: function (){
		mountLayout(AppContainer, { content: (props) => { return React.createElement(notFound, props); } });
	}
};

// sections
var adminSection = FlowRouter.group({
	prefix: '/admin'
});

var superAdminSection = adminSection.group({
	prefix: '/super'
});

// home page
FlowRouter.route('/', {
	name: 'home',
	action (params){
		mountLayout(AppContainer, { content: (props) => { return React.createElement(Home, props); } });
	}
});

// map page
FlowRouter.route('/map', {
	name: 'map',
	action (params){
		mountLayout(AppContainer, { content: (props) => { return React.createElement(Map, props); } });
	}
});

// /admin page
adminSection.route('/', {
	name: 'adminHome',
	action: function (params, queryParams){}
});

// /super page
adminSection.route('/', {
	name: 'saHome',
	action: function (params, queryParams){}
});
