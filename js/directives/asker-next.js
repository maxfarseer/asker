angular.module('askerApp')

  .directive("askerNext", function(){
    return {
      restrict: "E",
      replace: true,
      templateUrl: "js/directives/templates/asker-next.html",
      scope: {
        label: "=label",
        maximum: "=maximum",
        answers: "=answers",
        storeObj: "=storeObj",
        storeName: "=storeName",
        url: '=url'
      },
      link: function(scope, element, attributes){
        scope.$watch('answers', function() {
          console.log(scope.answers);
        });
      }
    };
  })
;
