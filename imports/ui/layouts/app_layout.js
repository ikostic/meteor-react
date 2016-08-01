//import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
//import { render } from 'react-dom';

import settings from '../../../config/settings.js';
import main from '../../lib/main';
import misc from '../../lib/misc.js';
import AccountsUIWrapper from '../auth/accounts_ui_wrapper';

export class AppLayout extends React.Component {
	/*getInitialState () {
		return {
			headerTitle: settings.general.defaultHeaderTitle
		};
	} <-- samo za react class*/
	constructor (props, context){
		super(props, context);
		this.state = {
			headerTitle: this.props.headerTitle
		};
	}
	componentDidMount (){
		//console.log(this.props);
		main.initApp();
	}
	/*setHeaderTitle (title){
		this.setState({ headerTitle: title });
	}*/
	render (){
		//this.setState({ headerTitle: settings.general.defaultHeaderTitle });
		const props = this.props;
		var navs = [];
		/*for (var i = 0; i < settings.mysql.entities.length; i++){
			navs.push(React.createElement('a', { key: i, href: '/' + settings.mysql.entities[i], className: 'mdl-navigation__link' }, misc.labelize(settings.mysql.entities[i])));
		}*/
		const nav = React.createElement('nav', { className: 'mdl-navigation' },
			navs,
			React.createElement('a', { href: '/map', className: 'mdl-navigation__link' }, 'Map')
		);
		const headerNav = React.createElement('nav', { className: 'mdl-navigation mdl-layout--large-screen-only' }, navs);
		return (
			React.createElement('div', { className: 'mdl-layout mdl-js-layout mdl-layout--fixed-header' }, //{ className: 'root-container' },
				React.createElement('header', { className: 'mdl-layout__header' },
					React.createElement('div', { className: 'mdl-layout__header-row' },
						React.createElement('span', { id: 'headerTitle', className: 'mdl-layout-title' }, this.state.headerTitle),
						React.createElement('div', { className: 'mdl-layout-spacer' }, ''),
						headerNav,
						React.createElement('div', { className: 'mdl-layout-spacer' }, '')/*,
						React.createElement(AccountsUIWrapper, null)
						/*React.createElement('div', { className: 'mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right' },
							React.createElement('label', { className: 'mdl-button mdl-js-button mdl-button--icon', htmlFor: 'headersearch' },
								React.createElement('i', { className: 'material-icons' }, 'search')
							),
							React.createElement('div', { className: 'mdl-textfield__expandable-holder' },
								React.createElement('input', { type:'text', name: 'search', id: 'headersearch', className: 'mdl-textfield__input' })
							)
						)*/
					)
				),
				React.createElement('div', { className: 'mdl-layout__drawer' },
					React.createElement('span', { className: 'mdl-layout-title' }, props.drawerTitle),
					nav
				),
				React.createElement('main', { className: 'mdl-layout__content' },
					React.createElement('div', { className: 'page-content' },
						props.content(props)
					)
				),
				React.createElement('div', { id: 'global_message', className: 'mdl-js-snackbar mdl-snackbar' },
					React.createElement('div', { className: 'mdl-snackbar__text' }),
					React.createElement('button', { type: 'button', className: 'mdl-snackbar__action' })
				),
				React.createElement('footer', { className: 'mdl-mini-footer' },
					React.createElement('div', { className: 'mdl-mini-footer__left-section' },
						React.createElement('div', { className: 'mdl-logo' }, 'Powered by Open Kinetix'),
						React.createElement('ul', { className: 'mdl-mini-footer__link-list' },
							React.createElement('li', null, 'Help'),
							React.createElement('li', null, 'Privacy'),
							React.createElement('li', null, 'Terms & Conditions')
						)
					)
				)
			)
		);
	}
}

AppLayout.propTypes = {
	initialHeaderTitle: React.PropTypes.string,
	//setHeaderTitle: React.PropTypes.function,
	drawerTitle: React.PropTypes.string,
	signedIn: React.PropTypes.bool
};
