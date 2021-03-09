var express = require('express');
var router = express.Router();

/* GET users listing. WE MAY NOT use this */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
router.use();
module.exports = router;
