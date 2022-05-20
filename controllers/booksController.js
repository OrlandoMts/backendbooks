/* eslint-disable no-unused-vars */
var con = require("../conf/connection");
var bookModel = require("../models/book");
var authorModel = require("../models/authors");

module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function (req, res, next) {
    // Le envio al modelo la conexion a la bd y le paso una funcion que ejecutará despues
    // de la consulta
    bookModel.getBooks(con, (err, data) => {
      const context = {
        title: "Seccion de libros",
        books: data,
      };
      res.render("books/booksView", context);
    });
  },

  create: function (req, res, next) {
    authorModel.getAuthors(con, (err, data) => {
      try {
        const context = {
          title: "Crear libro",
          authors: data,
        };

        res.render("books/createView", context);
      } catch (error) {
        res.send(error);
      }
    });
  },

  save: function (req, res) {
    res.send(req.body)
  }
};
