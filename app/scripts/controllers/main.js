'use strict';

/**
 * @ngdoc function
 * @name psApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the psApp
 */
angular.module('psApp')
  .controller('MainCtrl', function ($http, $scope, $filter) {

    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.screenings = [];

    $http.get('../scripts/screenings.json').then(function(response) {
      $scope.screenings = response.data.results;
    });

    // Pagination Functions - Start
    $scope.getData = function () {
      return $filter('filter')($scope.screenings, $scope.search);
    };

    $scope.numberOfPages=function(){
      if($scope.getData().length === 0) {
        return 20;
      } else {
      return Math.ceil($scope.getData().length/$scope.pageSize);
      }
    };
    // Pagination Functions - End

    // Sort Functions - Start
    // to sort the list on click of sort buttons
    $scope.sorted = function(propertyName) {
      if(propertyName === 'name') {
        $scope.sortByName = !$scope.sortByName;
      } else if (propertyName === 'created') {
        $scope.sortByCreated = !$scope.sortByCreated;
      } else if (propertyName === 'modified') {
        $scope.sortByModified = !$scope.sortByModified;
      }
      $scope.sortBy = propertyName;
      $scope.reverse = !$scope.reverse;
    };

    // to reset the sort buttons to default
    $scope.reset = function() {
      $scope.sortByName = false;
      $scope.sortByCreated = false;
      $scope.sortByModified = false;
      $scope.sortBy = undefined;
      $scope.reverse = undefined;
    };
    // Sort Functions - End

  });

// Filter to paginate
angular.module('psApp')
  .filter('startFrom', function() {
    return function(input, start) {
      if (!input || !input.length) { return; }
      start = +start; //parse to int
      return input.slice(start);
    };
  });


