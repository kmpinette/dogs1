'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
 
}])

.controller('Dogs', function($scope, $http) {
  var req = {
    method: 'get',
    url: 'https://dogsdb-c533.restdb.io/rest/dogs',
    headers: {
      'x-apikey': '5b47fcee4080a2143ad76d98'
    }
  }

  $http(req).then(function(response){
    $scope.dogs = response.data;
},  function(response){

  })
})



.controller('DeleteDog', function($scope, $http){
  
  $scope.deleteClick=function(){
    console.log("click")
      var req = {
        method: 'DELETE',
        url: 'https://dogsdb-c533.restdb.io/rest/dogs',
        headers: {
          'x-apikey': '5b47fcee4080a2143ad76d98'
        }
      }
      data: {
        id: $scope.id
      }
    
    $http(req).then(function(response){});
  }
})





