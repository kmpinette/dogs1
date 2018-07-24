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
  $scope.loadData=function(){
    var req = {
      method: 'get',
      url: 'https://dogsdb-c533.restdb.io/rest/dogs',
      headers: {
        'x-apikey': '5b47fcee4080a2143ad76d98'
      }
    }
    $http(req).then(function(response){
      $scope.dogs = response.data;
    })
  }
    
  $scope.deleteClick=function(id){
    console.log("click")
      var req = {
        method: 'delete',
        url: 'https://dogsdb-c533.restdb.io/rest/dogs/'+ id,
        headers: {
          'x-apikey': '5b47fcee4080a2143ad76d98'
        }
      };      
      
    console.log($scope._id);
    $http(req).then(function(response){
      $scope.loadData();
    });
  }
  $scope.loadData();
})







