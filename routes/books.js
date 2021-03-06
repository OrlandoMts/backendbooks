var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController');
const multer  = require('multer');

const storage = multer.diskStorage({
  //Es la ruta donde guardarĂ¡ la imagen
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  //le cambia el nombre al archivo de la imagen insertada
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage })


/* GET home page. */
router.get('/', booksController.index);
router.get('/create', booksController.create);

router.post('/', upload.single("image"), booksController.save);
router.post('/delete/:id', booksController.delete);
router.get('/edit/:id', booksController.edit);

router.post('/update/:id', upload.single("image"), booksController.update);

module.exports = router;
