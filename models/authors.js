module.exports = {
  getAuthors: function(connection, callback) {
    connection.query("SELECT * FROM authors", callback);
  },
}
