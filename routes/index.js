var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const context = {
    title: 'Express',
  }
  res.render('index', context)
});

module.exports = router;
