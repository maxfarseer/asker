'use strict';

angular.module('askerApp')
  .factory('$rest', ['$resource', function ($resource) {

    var root = 'http://localhost:8888/asker/';

    var rest = {
      questions: $resource(root+ 'json/questions.json', {}, {
        load: {method: 'GET'}
      })
    };

    return rest;
  }])
;
