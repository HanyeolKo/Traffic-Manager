var express = require('express');
var router = express.Router();

/* Hello World Test */
router.get('/', function(req, res, next) {
  res.send('hello World!');
});

module.exports = router;
