var app = angular.module('Mean', ['Mongo']);

app.controller('myController', function($scope, mongo) {

  var collection = 'members';

  function init() {
    $scope.users = [];
    refresh();
  }


  function refresh(result) {
    mongo.find(collection, {}, function(data) {
      $scope.users = data;
    });
  };


  $scope.create = function() {
    mongo.insert(collection, {
      email: $scope.email,
      password: $scope.password
    }, refresh);
  };

  $scope.update = function(index) {
    mongo.update(collection, { "email": $scope.users[index].email }, {
      'email': $scope.users[index].email,
      'password': $scope.users[index].password
    }, {}, refresh);
  };

  $scope.delete = function(index) {
    mongo.remove(collection, { "email": $scope.users[index].email }, refresh);
  };

  init();
});
