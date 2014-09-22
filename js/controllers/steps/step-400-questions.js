'use strict';

angular.module('askerApp')
  .controller('Step400Ctrl', ['$scope', '$http', function ($scope, $http) {

  $scope.$rest.questions.load({}).$promise.then(next);

  function next(data) {
    $scope.questions = data.result;
    console.log($scope.questions);
  };

  $scope.questionNumber = 0;
  $scope.userAnswers = [];
  $scope.questEnd = false;

  $scope.setAnswer = function(answ) {

    $scope.userAnswers.push(answ);
    $scope.questionNumber++;

    if ($scope.questionNumber >= 3) {
      $scope.questEnd = true;
    }
  };

  }])
;
