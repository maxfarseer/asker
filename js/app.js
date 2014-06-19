var askerApp = angular.module('askerApp', ['ngAnimate']);

askerApp.controller('mainCtrl', ['$scope', '$filter', '$timeout', '$http', function ($scope, $filter, $timeout, $http) {
  $scope.test = 'qq';

  $http.get('json/questions.json').success(function(data) {
    $scope.questions = data;
  });

}]);


askerApp.directive("questionRadio", function(){
  return {
    restrict: "EA",
    transform: true,
    templateUrl: "js/directives/templates/question-radio.html",

    link: function(scope, element, attributes){
      console.log(scope)
    }
    /*controller: function($scope){

    }*/
   };
});
