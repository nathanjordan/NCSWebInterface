define(['angular'], function(angular) {
    // Define the Brainbuilder module and its dependencies
    angular.module('BrainBuilder', []);
    // Manually initialize angular since we're using requirejs
    angular.bootstrap(document, ['BrainBuilder']);
});
