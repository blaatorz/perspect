var app = angular.module('perspectApp');

app.controller("loginCtrl", ['$scope', function($scope) {

  $scope.test = function() {
    console.log('test');
    console.log($scope.user.name);
  }

}]);
