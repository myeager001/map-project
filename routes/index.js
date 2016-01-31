var express = require('express');
var router = express.Router();
var data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/state/:abbr', function(req, res, next){
  var state = data[req.params.abbr];
  res.render('states', {state: state});
})

module.exports = router;
