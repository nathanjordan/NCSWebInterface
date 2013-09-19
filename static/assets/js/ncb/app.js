define(['angular'], function(angular) {
    return angular.module('BrainBuilder', [
            'ngRoute',
            'BrainBuilder.controllers',
            'BrainBuilder.filters',
            'BrainBuilder.services',
            'BrainBuilder.directives'
        ]);
});
