angular.module('askerApp')

  .directive("askerNext", function(){
    return {
      restrict: "E",
      replace: true,
      templateUrl: "js/directives/templates/asker-next.html",
      scope: {
        label: "=",
        maximum: "=",
        answers: "=",
        storeObj: "=",
        storeName: "=",
        handler: "&",
        url: '='
      },
      link: function(scope, element, attributes){
        scope.$watch('answers', function() {
          console.log(scope.answers);
        });
      }
    };
  })
;
