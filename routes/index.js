var express = require('express');
var router = express.Router();
var config = require('xtconf')();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Isom Family Vacation', api: config.get('api') });
});

module.exports = router;
