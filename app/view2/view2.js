'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}])

.controller('AddDog', function($scope, $http){
  var req = {
    method: 'POST',
    url: 'https://dogsdb-c533.restdb.io/rest/dogs',
    headers: {
      'x-apikey': '5b47fcee4080a2143ad76d98'
    },
  }
  $http(req).then(function(response){
  
    $scope.breed='',
    $scope.description='',
    $scope.size='',
    $scope.lifespan='',

  $scope.myChange=function(val){
    console.log("changed",$scope.breed);
    console.log("on-change",val);
    };
  })
})