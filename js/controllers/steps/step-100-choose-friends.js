'use strict';

angular.module('askerApp')
  .controller('Step100Ctrl', ['$scope', function ($scope) {
    $scope.vkFriends = ASKER.vkFriends;
  }])

  /*.directive('ask', function(){
    return {
      restrict: 'A',
      scope: {
        data: '=ask'
      },
      link: function(scope, element, attrs){


      }
    };
  })*/

;



            //$rootScope.team = [];

            /*

            $scope.setTeam = function() {
              console.log(123);
              var team = []
              _.each($scope.vkFriends, function(o) {
                if (o.checked) {
                  team.push(o);
                }
              });
              ASKER.team = team;
            };*/
