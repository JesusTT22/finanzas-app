const conexion = require ('../models/db.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

module.exports.login = async (req, res) => {
    const {correo, password} = req.body;
    {/*Manejo de errores */}
    try {
        {/* Validacion para seleccionar usuarios dentro de la base de datos ("?" se usa para mencionar las variables declaradas)*/}
        const [rows] = await conexion.query('SELECT * FROM Login WHERE correo = ?', [correo])
        if(rows.length === 0) {
            console.log('Usuario no Registrado')
            return res.status(401).json({message : 'Ups!, Usuario no registrado'})
        }
        const Compare = await bcrypt.compare(password, rows[0].password)
        {/* (!) se usa para declarar una variable como diferente */}
        if(!Compare) {
            return res.status(401).json({message: 'Contraseña Incorrecta.'})
        }
        const token = jwt.sign({id: rows[0].id}, process.env.JWT_SECRET, {expiresIn: '3m'})
        return res.status(201).json({token: token})
    } catch(err) {
        res.status(500).json(err)
    }
}


{/*Verificacion de Token de Inicio de Sesion */}
module.exports.verificarToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(403).json({message: 'No se proporciono ningun token.'})
        }
        const decodificar = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodificar.id
        next()
    } catch(err) {
        return res.status(500).json({message: 'Server Error'})
    }
}