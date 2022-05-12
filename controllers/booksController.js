module.exports = {
  // eslint-disable-next-line no-unused-vars
  index: function(req, res, next) {
    res.render('index', { title: 'Express' });
  },
}
