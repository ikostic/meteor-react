import { FlowRouter } from 'meteor/kadira:flow-router';

const main = new function (){
	this.initApp = function (){
		componentHandler.upgradeDom();
		console.log('init App');
	};
	this.initList = function (){
		componentHandler.upgradeDom();
		console.log('init List');
	};
	this.initItem = function (){
		componentHandler.upgradeDom();
		console.log('init Item');
	};
	this.globalMessage = function (msg, type, duration, action, actionLabel){
		type = type || 'info'; // info, notice, warning, error
		var msgPanel = document.querySelector('#global_message');
		var data = {
			message: msg || 'Error: message argument is required',
			timeout: duration || 2000,
			actionHandler: action || null,
			actionText: actionLabel || null
		};
		if (!!msgPanel) msgPanel.MaterialSnackbar.showSnackbar(data);
	};
	this.forward404 = function (){
		FlowRouter.go('home');
		this.globalMessage('Page Not Found (error code: 404)', 4000);
	};
};

module.exports = main;

