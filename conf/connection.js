var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password :'',
  database: 'nodejslibros'
});

connection.connect(()=>{
  try {
    console.log('Conexion lista')
  } catch (error) {
    console.log('Error de conexion', error)
  }
});

module.exports = connection;
