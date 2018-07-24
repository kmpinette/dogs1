'use strict';

angular.module('myApp.dogAdd', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dogAdd', {
    templateUrl: 'dogAdd/dogAdd.html',
    controller: 'DogAddCtrl'
  });
}])

.controller('DogAddCtrl', [function() {

}])

.controller('AddDog', function($scope, $http){
    
  $scope.breed='';
  $scope.description='';
  $scope.size='';
  $scope.lifespan='';
  
  $scope.addClick=function(){
    var req = {
      method: 'POST',
      url: 'https://dogsdb-c533.restdb.io/rest/dogs',
      headers: {
        'x-apikey': '5b47fcee4080a2143ad76d98'
      },
      data: {
        breed: $scope.breed,
        description: $scope.description,
        size: $scope.size,
        lifespan: $scope.lifespan
      }
    }; 
    $http(req).then(function(response){});
  }
})