'use strict';

angular.module('askerApp')
  .factory('$rest', ['$resource', function ($resource) {

    //var root = 'http://localhost:8888/asker/';
    var root = 'https://scorching-fire-1793.firebaseapp.com/';

    var rest = {
      questions: $resource(root+ 'json/questions.json', {}, {
        load: {method: 'GET'}
      })
    };

    return rest;
  }])
;
