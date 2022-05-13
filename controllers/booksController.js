var con = require('../conf/connection');
var bookModel = require('../models/book');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function(req, res, next) {
    // Le envio al modelo la conexion a la bd y le paso una funcion que ejecutará despues
    // de la consulta
    bookModel.getBooks(con, (err, data) => {
      console.log(data);
      const context = {
        title: 'Seccion de libros',
      }
      res.render('booksView', context);
    });
  },
}

