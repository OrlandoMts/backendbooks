module.exports = {
  // Hace la consulta a la bd, recibe la conexion desde el controlador
  getBooks: function (connection, callback) {
    connection.query("SELECT * FROM books", callback);
  },
  getBookById: function(connection, data, callback) {
    connection.query("SELECT * FROM books WHERE id = ?", [data.id], callback);
  },
  insertBook: function(connection, data, image, callback) {
    connection.query("INSERT INTO books (name,image,idAuthor) VALUES (?,?,?)",
    [data.name, image.filename, data.idAuthor],callback)
    // Va filename porque en la ruta books altere el nombre del archivo
  },
  deleteBook: function(connection, data, callback) {
    connection.query("DELETE FROM books WHERE id = ?", [parseInt(data.id)], callback);
  },
  updateBookName: function(connection, data, image, param, callback){
    connection.query("UPDATE books SET name = ?, image = ?, idAuthor = ? WHERE books.id = ?",
      [data.name, image.filename, data.idAuthor, param.id],
      callback)
  }
}
