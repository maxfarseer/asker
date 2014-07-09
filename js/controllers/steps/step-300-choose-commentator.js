'use strict';

angular.module('askerApp')
  .controller('Step300Ctrl', ['$scope', '$http', function ($scope, $http) {

  $scope.$rest.commentators.load({}).$promise.then(next);

  function next(data) {
    $scope.commentators = data.result;
  }

  }])
