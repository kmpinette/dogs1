'use strict';

angular.module('myApp.dogList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dogList', {
    templateUrl: 'dogList/dogList.html',
    controller: 'DogListCtrl'
  });
}])

.controller('DogListCtrl', [function() {
 
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
    if(window.confirm("Do you really want to delete this dog?")) {
      var req = {
        method: 'delete',
        url: 'https://dogsdb-c533.restdb.io/rest/dogs/'+ id,
        headers: {
          'x-apikey': '5b47fcee4080a2143ad76d98'
        }
      };      
    } 
    $http(req).then(function(response){
      $scope.loadData();
    });
  }
  $scope.loadData();
})







