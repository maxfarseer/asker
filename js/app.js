'use strict';

var app = angular.module('askerApp', [
  'ngAnimate',
  'ngResource',
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state('home', {
        url: '/home',
        templateUrl: '/js/views/home/home.html'
    })

    .state('home.authors', {
        url: '/authors',
        templateUrl: '/js/views/home/authors.html',
        controller: function($scope) {
            $scope.authors = ['Злой школьник', 'Тимми'];
        }
    })

    .state('home.participants', {
        url: '/participants',
        templateUrl: '/js/views/home/participants.html',
        controller: function($scope) {
            $scope.vkUser = ASKER.vkUser;
        }
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
        // we'll get to this in a bit
    });

}]);

app.controller('mainCtrl', ['$scope', function ($scope) {

  //$scope.vkUser = ASKER.vkUser;

}]);
