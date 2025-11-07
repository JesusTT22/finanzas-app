const conexion = require ('../models/db.js')

module.exports.registro = (req, res) => {
    {/*Declarar parametros a usar*/}
    const {username, nombre, apellido, correo, password, fecha_nacimiento} = req.body

    {/*Insertar datos dentro de la base de datos */}
    const insercion = 'INSERT INTO Login (username, nombre, apellido, correo, password, fecha_nacimiento) VALUES (?, ?, ?, ?, ?, ?)'
    const consulta = 'SELECT * FROM Login WHERE correo = ?'

    {/*MANEJO DE ERRORES */}
    try {
        conexion.query(consulta, [correo], (err, result) => {
            if(err) {
                res.send(err)
            }
            if(result.leght > 0) {
                console.log('No se ha podido registrar el Usuario')
                res.send(result)
            } else {
        conexion.query(insercion, [username, nombre, apellido, correo, password, fecha_nacimiento], (err, result) => {
            if(err) {
                res.send(err)
            }
            if(result) {
                console.log({message: 'Usuario registrado Correctamente'})
                res.send({message: 'Usuario registrado Correctamente'})
            }
        })
        }})
    } catch {

    }


}