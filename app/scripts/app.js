'use strict';

/**
 * @ngdoc overview
 * @name psApp
 * @description
 * # psApp
 *
 * Main module of the application.
 */
angular
  .module('psApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
