var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController');

/* GET home page. */
router.get('/', booksController.index);
router.get('/create', booksController.create);

router.post('/', booksController.save);

module.exports = router;
