var con = require('../conf/connection');
var authorsModel = require('../models/authors');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function (req, res, next) {
    authorsModel.getAuthors(con, (err, data) => {

      const context = {
        title: 'Autores',
        authors: data
      }
      res.render('authors/authorsView', context);
    })
  },
  // eslint-disable-next-line no-unused-vars
  createAuthor: function(req, res, next) {
    const context = {
      title: 'Crear autor'
    }
    res.render('authors/createAuthorView', context);
  },

  saveAuthor: function(req, res){
    authorsModel.insertAuthor(con, req.body, (err) => {
       res.redirect('/authors');
    })
  }
}
