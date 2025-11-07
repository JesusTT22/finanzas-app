const conexion = require ('../models/db.js')
const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
    const {correo} = req.body;
    {/* Validacion para seleccionar usuarios dentro de la base de datos ("?" se usa para mencionar las variables declaradas)*/}
    const consulta = 'SELECT * FROM Login WHERE correo = ?';

    {/*Manejo de errores */}
    try{
        conexion.query(consulta, [correo], (err, result) =>{
            {/*En caso de que la I de error, mostrar el error */}
            if(err){
                res.send(err)
            }

            {/*Si el resultado es mayor a 0 enviar el resultado */}
            if(result.length > 0){
                console.log('Inicio de Sesion Exitoso')
                res.send({message: 'Inicio de Sesion Exitoso'})
                {/*EN CASO DE QUE NO SE ENCUENTREN DATOS MOSTRAR UN MENSAJE DE ERROR*/}
            } else {
                console.log('El usuario no existe')
                res.send({message: 'El usuario no existe'})
            }
        })
    } catch (e) {

    }
}