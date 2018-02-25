var express = require('express');
var router = express.Router();

/* GET home page. */

/*
	URL param: follows regex, except '-' and '.' are read literally not '\',
	':' defines route parameters which comes back in req.params
*/
/*
	Multiple callback functions need to make use of next() to pass to the next callback
*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
