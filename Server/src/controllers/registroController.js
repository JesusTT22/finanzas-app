const conexion = require ('../models/db.js')
const bcrypt = require ('bcrypt')

module.exports.registro = async (req, res) => {
    {/*Declarar parametros a usar*/}
    const {username, nombre, apellido, correo, password, fecha_nacimiento} = req.body
    {/*MANEJO DE ERRORES */}
    try {
        const [rows] = await conexion.query('SELECT * FROM Login WHERE correo = ?', [correo])
        if(rows.length > 0) {
            return res.status(201).json({message : 'Ya hay un Usuario registrado'})
        }
        const contraseñaHasheada = await bcrypt.hash(password, 10)
        await conexion.query('INSERT INTO Login (nombre, apellido, fecha_nacimiento, username, correo, password) VALUES (?, ?, ?, ?, ?, ?)', [nombre, apellido, fecha_nacimiento, username, correo, contraseñaHasheada])
        res.status(201).json({message : 'Usuario registrado Correctamente 😉'})
    } catch(err) {
        console.log('Error en Registro: ', err)
        res.status(500).json(err)
    }


}