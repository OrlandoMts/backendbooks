var con = require('../conf/connection');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function(req, res, next) {
    con.query("SELECT * FROM books", function (err, data){
      console.log(data);
    });
    res.render('index', { title: 'Express' });
  },
}
