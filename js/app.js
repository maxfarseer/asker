'use strict';

//firebase
var myDataRef = new Firebase('https://scorching-fire-1793.firebaseio.com/');

myDataRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  console.log('вопрос: '+message.q + ', ответ - '+message.a);
});

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
      questions: "=q",
      current: "=current"
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

      scope.setAnswer = function(answ) {
        scope.answ = answ;
        $('.js-next').removeAttr('disabled');
      }

      scope.next = function() {
        console.log(scope.current, scope.answ);
        //myDataRef.set('question ' + scope.current + ':' + scope.answ);
        myDataRef.push({q: scope.current, a: scope.answ}); //set - full empty, push - add

        $('.js-next').attr('disabled','disabled');

        if (scope.current < scope.$parent.questions.length - 1) {
          scope.current = scope.current + 1;
        } else {
          scope.current = 0;
        }

        return scope.current;
      }
    }
    /*controller: function($scope){

    }*/
   };
});
