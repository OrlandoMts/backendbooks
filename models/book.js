module.exports = {
  // Hace la consulta a la bd, recibe la conexion desde el controlador
  getBooks: function (connection, callback) {
    connection.query("SELECT * FROM books", callback);
  }
}
