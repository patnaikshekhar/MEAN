app.controller('myController', function($scope, mongo) {

  var collection = 'members';

  function init() {
    $scope.users = [];
    mongo.follow(collection, refresh);
    refresh();
  }


  function refresh() {
    mongo.find(collection, {}, function(data) {
      $scope.users = data;
    });
  }


  $scope.create = function() {
    mongo.insert(collection, {
      email: $scope.email,
      password: $scope.password
    }, function() {});
  };

  $scope.update = function(index) {
    mongo.update(collection, { 'email': $scope.users[index].email }, {
      'email': $scope.users[index].email,
      'password': $scope.users[index].password
    }, {}, function() {});
  };

  $scope.delete = function(index) {
    mongo.remove(collection, { 'email': $scope.users[index].email }, function() {});
  };

  init();
});
