'use strict';

var app = angular.module('askerApp', [
  'ngAnimate',
  'ngResource',
  'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: '/js/views/home/home.html'
    })
    .state('step-100-choose-friends', {
        url: '/step-100-choose-friends',
        templateUrl: '/js/views/steps/step-100-choose-friends.html',
        controller: function($scope) {
            $scope.friendCounter = 0;
            $scope.vkFriends = ASKER.vkFriends;
            //$rootScope.team = [];

            $scope.chooseFriend = function(friend) {
              if (!friend.checked && $scope.friendCounter < 4) {
                friend.checked = true;
                $scope.friendCounter++;
              } else if (friend.checked) {
                friend.checked = false;
                $scope.friendCounter--;
              } else {
                //
              }
            };

            $scope.setTeam = function() {
              console.log(123);
              var team = []
              _.each($scope.vkFriends, function(o) {
                if (o.checked) {
                  team.push(o);
                }
              });
              ASKER.team = team;
            };

        }
    })
    .state('step-200-choose-music', {
        url: '/step-200-choose-music',
        templateUrl: '/js/views/steps/step-200-choose-music.html',
        controller: function($scope) {
          $scope.team = ASKER.team;
          $scope.vkAudio = ASKER.vkAudio;
        }
    })
    .state('step-300-choose-commentator', {
        url: '/step-300-choose-commentator',
        templateUrl: '/js/views/steps/step-300-choose-commentator.html',
        controller: function($scope) {
          $scope.commentators = ['v1lat, versuta, casper'];
        }
    })
    .state('about', {
        url: '/about',
        views: {
          '': { templateUrl: '/js/views/about.html' },
          'columnOne@about': { template: 'Look I am a column!' },
          'columnTwo@about': {
              template: 'Look, I am second!',
              //templateUrl: 'table-data.html',
              //controller: 'scotchController'
          }
        }
    });

}]);

app.controller('mainCtrl', ['$scope', function ($scope) {

  //$scope.vkUser = ASKER.vkUser;

}]);
