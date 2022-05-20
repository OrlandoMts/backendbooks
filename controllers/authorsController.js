var con = require('../conf/connection');
var authorsModel = require('../models/authors');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function (req, res, next) {
    authorsModel.getAuthors(con, (err, data) => {
      console.log(data)
      const context = {
        title: 'Autores',
      }
      res.render('authors/authorsView', context);
    })
  }
}
