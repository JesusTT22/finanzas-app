const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController')
const { login, verificarToken } = require('../controllers/loginController')
const { registro } = require('../controllers/registroController')

router.get('/ping', ping);
router.post('/login', login);

router.post('/registro', registro)
router.get('/Sistema_de_control', verificarToken, (req, res) => {
    return res.status(200).json({message : 'Acceso Autorizado', userId: req.userId})
})


module.exports = router;