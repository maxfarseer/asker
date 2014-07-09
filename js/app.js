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
        templateUrl: '/js/views/home/home.html',
        controller: 'mainCtrl'
    })
    .state('step-100-choose-friends', {
        url: '/step-100-choose-friends',
        templateUrl: '/js/views/steps/step-100-choose-friends.html',
        controller: 'Step100Ctrl'
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
        controller: 'Step300Ctrl'
    })
    .state('step-400-questions', {
        url: '/step-400-questions',
        templateUrl: '/js/views/steps/step-400-questions.html',
        //controller: 'Step300Ctrl'
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

app.run(['$rootScope','$rest', function ($rootScope, $rest) {
  $rootScope.$rest = $rest;
  $rootScope.root = $rootScope;
}]);

app.controller('mainCtrl', ['$scope', function ($scope) {
  $scope.answers = 0;

  $scope.setCheckedOne = function(obj, collection) {
    var checkedObj = _.find(collection, {checked: true});
    if (checkedObj) {
      checkedObj.checked = false;
    }
    obj.checked = true;
    $scope.answers = 1;
  };

  $scope.setChecked = function(obj, max, collection) {
    if (!obj.checked && $scope.answers < max) {
      obj.checked = true;
      $scope.answers++;
    } else {
      if (obj.checked) {
        obj.checked = false;
        $scope.answers--;
      }
    }
  };

  $scope.setAnswers = function(collection, name) {
    var answers = [];

    _.each(ASKER[collection], function(o) {
      if (o.checked) {
        answers.push(o);
      }
    });
    ASKER[name] = answers;
    $scope.answers = 0;
    debugger;
  };

}]);
