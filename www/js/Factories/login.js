var app = angular.module('perspectApp');

app.factory("login", function($firebaseArray) {
  var loginRef = new Firebase("https://perspect.firebaseio.com/users");
  return $firebaseArray(loginRef);
});
