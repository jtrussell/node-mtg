/*global angular */

angular
  .module('mtg.docs', ['ngRoute'])

  .config(function($routeProvider) {
    'use strict';

    var getStuff = function(/*$route*/) {
      // ...
    };

    $routeProvider
      .when('/docs', {
        // Leave ourselves open to browsing docs by version
        redirectTo: '/docs/latest'
      })
      .when('/docs/:version', {
        controller: 'DocsCtrl',
        controllerAs: 'docs',
        templateUrl: 'components/docs/docs.html',
        resolve: { stuff: getStuff }
      });
  });
