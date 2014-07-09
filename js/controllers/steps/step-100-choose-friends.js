'use strict';

angular.module('askerApp')
  .controller('Step100Ctrl', ['$scope', function ($scope) {
    $scope.vkFriends = ASKER.vkFriends;
  }])
;
