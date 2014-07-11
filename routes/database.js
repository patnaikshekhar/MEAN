var express = require('express');
var router = express.Router();

var database = require('../database');

router.post('/insert', function(req, res) {
  database.insert(req.body.collection, req.body.object, function(err, result) {
    res.json({
      'error': err,
      'result': result
    });
  });
});

router.post('/find', function(req, res) {
  var result = [];
  database.find(req.body.collection, req.body.search, function(err, docs) {
    if (err) {
      res.json({
        'error': err,
        'result': null
      });
    } else {
      docs.each(function(err, doc) {
        if (doc) {
          result.push(doc);
        } else {
          res.json({
            'error': err,
            'result': result
          });
        }
      });
    }
  });
});

router.post('/findOne', function(req, res) {
  database.findOne(req.body.collection, req.body.search,
    function(err, doc) {
      res.json({
        'error': err,
        'result': doc
      });
    }
  );
});

router.post('/update', function(req, res) {
  database.update(req.body.collection, req.body.search, req.body.update,
    req.body.options, function(err, result) {
      res.json({
        'error': err,
        'result': result
      });
    }
  );
});

router.post('/save', function(req, res) {
  database.save(req.body.collection, req.body.object, function(err, result) {
      res.json({
        'error': err,
        'result': result
      });
    }
  );
});

router.post('/remove', function(req, res) {
  database.remove(req.body.collection, req.body.search, function(err, result) {
      res.json({
        'error': err,
        'result': result
      });
    }
  );
});

module.exports = router;
