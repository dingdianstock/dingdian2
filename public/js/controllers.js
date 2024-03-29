'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!';
  });
}

function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MyCtrl3() {}
MyCtrl3.$inject = [];


function MyCtrl4($scope, $http) {
  $http({ method: 'GET', url: '/logout' });
}
MyCtrl4.$inject = [];
