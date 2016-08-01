var baseUrl = 'https://openkinetix.com/';
var assetsUrl = 'https://openkinietix.com/';

var settings = {
	general: {
		rootUrl: baseUrl,
		appVersion: '0.0.1',
		client: 'OpenKinetix',
		defaultHeaderTitle: 'Meteor-React',
		defaultDrawerTitle: 'Meteor-React'
	},
	request: {
		headers: {
			common: {
			},
			get: {
			},
			post: {
			},
			put: {
			},
			push: {
			},
			delete: {
			},
			options: {
			}
		}
	},
	translation: {
		localizationSuffix: '_i18n',
		cultures: ['en','rs'],
		defaultCulture: 'en',
		propertyName: 'locales'
	},
	locale: {
		date: {
			format: 'DD.MM.YYYY.',
			displaydateformat: 'DD.MM.YYYY.',
			displaydatetimeformat: 'DD.MM.YYYY. HH:mm',
			options: {
				formatYear: 'YY',
				startingDay: 1
			}
		}
	},
	mysql: {
		subscriptions: ['shipments','countries','states','invoices','companies','offices','vehicles','drivers'],
		entities: ['shipments','invoices','offices','vehicles','drivers'],
		skipKeys: ['id','_index','index','culture','state_id','created_at','updated_at','deleted_at'],
		addParentJoins: 1,
		addChildrenJoins: 1,
		singularifyJoinProperties: 1,
		flattenLocalization: 1
	},
	grid: {
		skipKeys: ['ein','code','address2','states','office_id','company_id','country_id','state_id'],
		initialGridConfig: {
			cols: [],
			numerize: 0,
			selectedId: null,
			sortInfo: [],
			dataGridInstance: null
		}
	},
	item: {
		skipKeys: ['office'],
	},
	api: {
		baseUrl: baseUrl
	},
	dev: {
		debug: true,
		consoleLog: true
	},
	media: {
		snap: {
			w: 256,
			h: 256,
			crop: true, // if false, centers image and fills bg black
			format: 'image/jpeg', // available: 'image/jpeg' and 'image/png'
			upload: assetsUrl + 'upload/snaps/upload.php',
			url: assetsUrl + 'upload/snaps/'
		},
		pic: {
			format: 'image/jpeg', // available: 'image/jpeg' and 'image/png'
			upload: assetsUrl + 'upload/pics/upload.php',
			url: assetsUrl + 'upload/pics/'
		}
	},
	tools: {
		modules: [
			{ name: 'backup', route: '/tools/backup', mdi: 'undo', label: 'DB Backup', description: 'Backup or restore database.'}
		],
		methods: []
	}
};

module.exports = settings;

