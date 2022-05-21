module.exports = {
  getAuthors: function(connection, callback) {
    connection.query("SELECT * FROM authors", callback);
  },
  insertAuthor: function(connection, data, callback) {
    connection.query("INSERT INTO authors (name) VALUES (?)", [data.name], callback)
  }
}
