/*global angular */

angular
  .module('mtg', ['ngRoute', 'mtg.docs'])

  .config(function($routeProvider) {
    'use strict';
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  })

  .controller('HomeCtrl', function() {
    'use strict';
    // ...
  });
