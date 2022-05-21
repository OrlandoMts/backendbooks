/* eslint-disable no-unused-vars */
var con = require("../conf/connection");
var bookModel = require("../models/book");
var authorModel = require("../models/authors");
const fileSystem = require("fs");

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
    //req.file contiene el nombre del archivo de la imagen
    bookModel.insertBook(con, req.body, req.file, (err) =>{
      try {
        res.redirect('/books');
      } catch (err) {
        res.send(err)
      }
    })
  },

  delete: function (req, res) {
    bookModel.getBookById(con, req.params, (err, rows) => {
      //Asi obtengo la ruta de la imagen
      let imageRoute = "public/images/" + rows[0].image;

      //Busco primero si existe la imagen y con unlinkSync la borro
      if(fileSystem.existsSync(imageRoute)) {
        fileSystem.unlinkSync(imageRoute)
      }

      bookModel.deleteBook(con, req.params, (err) => {
        if(err) {
          res.send(err)
        } else {
          res.redirect('/books')
        }
      })
    })
  }
};
