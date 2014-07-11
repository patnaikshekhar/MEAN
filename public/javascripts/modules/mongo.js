var mongo = angular.module('Mongo', []);

mongo.service('mongo', function($http) {

  var socket = io();

  this.insert = function(collection, object, callback) {
    $http.post('/database/insert', {
      collection: collection,
      object: object
    }).success(function(data) { callback(data.result); });
  };

  this.find = function(collection, search, callback) {
    $http.post('/database/find', {
      collection: collection,
      search: search
    }).success(function(data) { callback(data.result); });
  };

  this.findOne = function(collection, search, callback) {
    $http.post('/database/findOne', {
      collection: collection,
      search: search
    }).success(function(data) { callback(data.result); });
  };

  this.update = function(collection, search, update, options, callback) {
    $http.post('/database/update', {
      collection: collection,
      search: search,
      update: update,
      options: options
    }).success(function(data) { callback(data.result); });
  };

  this.save = function(collection, object, callback) {
    $http.post('/database/findOne', {
      collection: collection,
      object: object
    }).success(function(data) { callback(data.result); });
  };

  this.remove = function(collection, search, callback) {
    $http.post('/database/remove', {
      collection: collection,
      search: search
    }).success(function(data) { callback(data.result); });
  };
});
