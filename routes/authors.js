var express = require('express');
var router = express.Router();
var authorsController = require('../controllers/authorsController');

// eslint-disable-next-line no-unused-vars
router.get('/', authorsController.index)

module.exports = router;
