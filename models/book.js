module.exports = {
  // Hace la consulta a la bd, recibe la conexion desde el controlador
  getBooks: function (connection, callback) {
    connection.query("SELECT * FROM books", callback);
  },
  insertBook: function(connection, data, image, callback) {
    connection.query("INSERT INTO books (name,image,idAuthor) VALUES (?,?,?)",
    [data.name, image.filename, data.idAuthor],callback)
    // Va filename porque en la ruta books altere el nombre del archivo
  }
}
