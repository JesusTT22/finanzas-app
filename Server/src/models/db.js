const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Finanzas'
});

conexion.connect();

module.exports = conexion;