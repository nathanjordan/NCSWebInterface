requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        // Libraries
        'jquery': 'lib/jquery',
        'jquery.bootstrap': 'lib/bootstrap',
        'html5shiv': 'lib/html5shiv',
        'respond': 'lib/respond',
        'angular': 'lib/angular',
        'underscore': 'lib/underscore',
        'async': 'lib/async',
        // NCB Specific
        'main': 'ncb/main',
        'init': 'ncb/init'
    },
    shim: {
        'jquery.bootstrap': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'angular': {
            exports: 'angular'
        }
    }
});

require(['init'], function (init) {
    init.initNavigation();
});
