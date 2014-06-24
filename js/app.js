'use strict';

var app = angular.module('askerApp', [
  'ngAnimate',
  'ngResource'
]);

app.run([
  '$rootScope', '$rest', function ($rootScope, $rest) {
    $rootScope.$rest = $rest;
    $rootScope.root = $rootScope;
  }
]);



app.controller('mainCtrl', ['$scope', '$filter', '$timeout', '$http', function ($scope, $filter, $timeout, $http, questions) {

  $scope.$rest.questions.load({}).$promise.then(next);

  function next(data) {
    $scope.questions = data.result;
  }

  $scope.currentIndex = 0;

}]);



app.directive("question", function(){
  return {
    restrict: "EA",
    replace: true,
    templateUrl: "js/directives/templates/question-radio.html",
    scope: {
      questions: "=q"
    },

    link: function(scope, element, attributes){
      //scope.currentIndex = 1; // Initially the index is at the first image
      scope.$watch('questions', function(questions) {
        /*angular.forEach(questions, function(q, key) {
          console.log(key, q);
        });*/

        if (questions) { //вопросы приехали
          scope.questions = questions;
        }
      });
    }
    /*controller: function($scope){

    }*/
   };
});
