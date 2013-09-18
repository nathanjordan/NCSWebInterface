requirejs.config({
    baseUrl: '/assets/js/',
    paths: {
        "jquery": "lib/jquery",
        "jquery.bootstrap": "lib/bootstrap",
        "html5shiv": "lib/html5shiv",
        "respond": "lib/respond",
        "angular": "lib/angular",
        "underscore": "lib/underscore"
    },
    shim: {
        "jquery": {
            deps: ["html5shiv", "respond"]
        },
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(["jquery", "jquery.bootstrap"], function ($) {

    $().ready( function() {
        $('#model').show();
        $('#simulation').hide();
        $('#cluster').hide();
        $('#results').hide();
        $('#visualization').hide();
    });

    $().ready( function() {
        $('#mainNav a').click( function() {
            var target;
            $('#mainNav li').removeClass('active');
            $(this).parent().addClass('active');
            hidePages();
            target = $(this).attr('href');
            $(target).show();
        });

    });

    function hidePages() {
        $('#pages .container').hide();
    }
});

