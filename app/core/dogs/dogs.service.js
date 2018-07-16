'use strict';

angular.
  module('core.dogs').
  factory('Dogs', ['$resource',
    function($resource) {
      return $resource('dogs/:dogsId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'dogs'},
          isArray: true
        }
      });
    }
  ]);
