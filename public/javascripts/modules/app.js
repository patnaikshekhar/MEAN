var app = angular.module('Mean', ['ngRoute', 'Mongo', 'ui.bootstrap']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/members.html',
      controller: 'myController',
    })
    .otherwise({
      redirectTo: '/'
    });
});
