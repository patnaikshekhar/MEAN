var connection = null;
var URL = 'mongodb://localhost/MEAN';

var io = null;
var MongoClient = require('mongodb').MongoClient;

function updateFollowers (collection) {
  io.emit('refresh-' + collection, { for: 'everyone' });
}

module.exports = {

  connect: function (cb) {
    MongoClient.connect(URL, function(err, db) {
      connection = db;
      cb(err);
    });
  },

  insert: function (collection, object, done) {
    connection.collection(collection).insert(object, function(err, result) {
      done(err, result);
      updateFollowers(collection);
    });
  },

  find: function (collection, search, done) {
    connection.collection(collection).find(search, function(err, docs) {
      done(err, docs);
    });
  },

  findOne: function (collection, search, done) {
    connection.collection(collection).findOne(search, function(err, doc) {
      done(err, doc);
    });
  },

  update: function (collection, search, update, options, done) {
    connection.collection(collection).update(search, update, options, function(err, result) {
      done(err, result);
      updateFollowers(collection);
    });
  },

  save: function (collection, object, done) {
    connection.collection(collection).save(object, function(err, result) {
      done(err, result);
      updateFollowers(collection);
    });
  },

  remove: function (collection, search, done) {
    connection.collection(collection).remove(search, function(err, result) {
      done(err, result);
      updateFollowers(collection);
    });
  },

  setSocket: function (ioConnection) {
    io = ioConnection;

    io.on('connection', function (socket) {
    });
  }
};
