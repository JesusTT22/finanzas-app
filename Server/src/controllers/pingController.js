const conexion = require ('../models/db.js')

module.exports.ping = (req, res) => {
    const consulta = 'SELECT * FROM login';


try {
    conexion.query(consulta, (err, results)=> {
        console.log(results)
    });
} catch (e) {

    }
}