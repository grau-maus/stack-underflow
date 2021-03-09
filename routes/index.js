var express = require('express');
var router = express.Router();

/* GET home page redirecting to '/questions'  */
router.get('/', function(req, res, next) {
  res.redirect('/questions')
  // res.render('index', { title: 'a/A Express Skeleton Home' });
});

module.exports = router;
