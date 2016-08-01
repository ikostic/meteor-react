var misc = {

	isSet: function (val){
		return !(val === null && typeof val === 'object') && typeof val !== 'undefined';
	},

	isEmpty: function (obj){
		if (!isSet(obj)) return true;
		if (obj.length > 0) return false;
		if (obj.length === 0) return true;
		for (var key in obj){
			if (obj.hasOwnProperty(key)) return false;
		}
		return true;
	},

	isNumeric: function (str){
		if (typeof str === 'number') return true;
		if (typeof str === 'string'){
			return parseFloat(str).toString() === str; 
		}
		return false;
	},

	getPositionInfo: function (elem){
		elem = elem || document.getElementsByTagName('body')[0];
		return {
			screenW: window.innerWidth,
			screenH: window.innerHeight,
			screenLS: window.innerWidth > window.innerHeight,
			w: elem.clientWidth,
			h: elem.clientHeight,
			l: angular.element(elem).offset().left,
			t: angular.element(elem).offset().top,
			sl: elem.scrollLeft,
			st: elem.scrollTop,
			ol: angular.element(elem).offset().left + elem.scrollLeft,
			ot: angular.element(elem).offset().top + elem.scrollTop
		};
	},

	getViewPort: function (){
		var e = window,
		a = 'inner';
		if (!('innerWidth' in window)){
			a = 'client';
			e = document.documentElement || document.body;
		}

		return {
			width: e[a + 'Width'],
			height: e[a + 'Height']
		};
	},

	getResponsiveBreakpoint: function (size){
		var sizes = {
			'xs': 480,
			'sm': 768,
			'md': 992,
			'lg': 1200
		};

		return sizes[size] ? sizes[size] : 0;
	},

	simpleString: function (str){
		return str.replace(/[^a-zA-Z-]/g,'_').toLowerCase();
	},

	guid: function (){
		function s4(){
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	},

	strRand: function (ln){
		ln = (ln > 255 ? 255 : (ln < 1 ? 1 : ln)) || 8;
		var str = '';
		function ss(){
			return Math.floor((1 + Math.random()) * 0x10000).toString(36).substring(1).toString();
		}
		while (str.length < ln) str += ss();
		//console.log(str + '----' + str.length);

		return str.substring(0, ln);
	},

	localDateString: function (now){
		now = now || new Date();
		var tzo = -now.getTimezoneOffset(),
		dif = tzo >= 0 ? '+' : '-',
		pad = function(num){
			var norm = Math.abs(Math.floor(num));
			return (norm < 10 ? '0' : '') + norm;
		};
		return now.getFullYear() +
			'-' + pad(now.getMonth()+1) +
			'-' + pad(now.getDate()) +
			'T' + pad(now.getHours()) +
			':' + pad(now.getMinutes()) +
			':' + pad(now.getSeconds()) +
			dif + pad(tzo / 60) +
			':' + pad(tzo % 60);
	},

	mergeRecursive: function (obj1, obj2){
		for (var p in obj2){
			try {
				// Property in destination object set; update its value.
				if ( obj2[p].constructor == Object ){
					obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);
				}else{
					obj1[p] = obj2[p];
				}
			}catch (e){
				// Property in destination object not set; create it and set its value.
				obj1[p] = obj2[p];
			}
		}
		return obj1;
	},

	copyToClipboard: function (text){
		var textArea = document.createElement('textarea');
		// css
		textArea.style.position = 'fixed';
		textArea.style.top = 0;
		textArea.style.left = 0;
		textArea.style.width = '2em';
		textArea.style.height = '2em';
		textArea.style.padding = 0;
		textArea.style.border = 'none';
		textArea.style.outline = 'none';
		textArea.style.boxShadow = 'none';
		textArea.style.background = 'transparent';
		// end css

		textArea.value = text;
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(textArea);
		textArea.select();

		try{
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		}catch (err){
			console.log('Oops, unable to copy: ' + err);
		}

		body.removeChild(textArea);
	},

	collectionParamToArray: function (collection, key){
		var res = [];
		if (this.isSet(collection)){
			for (var i = 0; i < collection.length; i++){
				console.log(collection[i]);
				res.push(collection[i][key]);
			}
		}
		return res;
	},

	firstToUpperCase: function (str){
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	},

	dateToShortString: function (obj){
		var str = obj.toISOString();
		darr = str.split('T');
		return darr[0];
	},

	labelize: function (str, singularify){
		singularify = singularify || false;
		if (str.substr(str.length - 3) === '_id') str = str.substr(0, str.length - 3);
		if (singularify) str = this.singularify(str);
		return this.firstToUpperCase(str).replace(/_|-/gi,' ');
	},

	toString: function (obj){
		//if (!!obj) return '';
		if (obj instanceof Date) return this.dateToShortString(obj);
		if (!!obj.name) return obj.name;
		if (!!obj.label) return obj.label;
		if (!!obj.title) return obj.title;
		if (!!obj.subject) return obj.subject;
		if (!!obj.iso3) return obj.iso3;
		if (!!obj.firstName && !!obj.middleName && !!obj.lastName) return obj.firstName + ' ' + obj.middleName + ' ' + obj.lastName;
		if (!!obj.firstName && !!obj.lastName) return obj.firstName + ' ' + obj.lastName;
		if (!!obj.firstName) return obj.firstName;
		if (!!obj.lastName) return obj.lastName;
		if (!!obj.first_name && !!obj.middle_name && !!obj.last_name) return obj.first_name + ' ' + obj.middle_name + ' ' + obj.last_name;
		if (!!obj.first_name && !!obj.last_name) return obj.first_name + ' ' + obj.last_name;
		if (!!obj.first_name) return obj.first_name;
		if (!!obj.last_name) return obj.last_name;
		if (!!obj.brand && !!obj.model) return obj.brand + ' ' + obj.model;
		if (!!obj.brand) return obj.brand;
		if (!!obj.model) return obj.model;
		var str = '';
		for (var k in obj){
			if (typeof obj[k] === 'object') continue;
			str += (str === '' ? '' : ', ') + obj[k];
		}
		return str;
	},

	unixTimestamp: function (date){
		date = date || new Date();
		if (!(date instanceof Date)) return null;
		var dateArr = date.toISOString().split('T');
		return dateArr[0] + ' ' + (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
		
	},

	singularify: function (plural){
		var vocals = ['a','e','i','o','u'];
		var exceptions = ['movies','anchovies'];
		if (exceptions.indexOf(plural) > -1) return plural.substr(0, plural.length - 1);
		if (plural.substr(plural.length - 8) == 'children') return plural.substr(0, plural.length - 3);
		if (plural.substr(plural.length - 4) == 'oxen') return plural.substr(0, plural.length - 2);
		if (plural.substr(plural.length - 4) == 'sses') return plural.substr(0, plural.length - 2);
		if (plural.substr(plural.length - 4) == 'eese') return plural.substr(0, plural.length - 4) + 'oose';
		if (plural.substr(plural.length - 4) == 'ives') return plural.substr(0, plural.length - 4) + 'ife';
		if (plural.substr(plural.length - 4) == 'zzes') return plural.substr(0, plural.length - 3);
		if (plural.substr(plural.length - 3) == 'men') return plural.substr(0, plural.length - 3) + 'man';
		if (plural.substr(plural.length - 3) == 'ice') return plural.substr(0, plural.length - 3) + 'ouse';
		if (plural.substr(plural.length - 3) == 'xes') return plural.substr(0, plural.length - 2);
		if (plural.substr(plural.length - 3) == 'ies') return plural.substr(0, plural.length - 3) + 'y';
		if (plural.substr(plural.length - 2) == 'ae') return plural.substr(0, plural.length - 1);
		if (plural.substr(plural.length - 2) == 'es'){
			if (vocals.indexOf(plural.substr(plural.length - 3, 1)) > -1){
				return plural.substr(0, plural.length - 2);
			}else{
				return plural.substr(0, plural.length - 1);
			}
		}
		if (plural.substr(plural.length - 1) == 'i') return plural.substr(0, plural.length - 1) + 'us';
		if (plural.substr(plural.length - 1) == 's') return plural.substr(0, plural.length - 1);
		return plural;
	},

	pluralify: function (singular){
		return singular;
	}
};

module.exports = misc;


