const { response, request } = require('express');
const Usuario = require('../models/Usuario.model');

const usuariosGet = async (req = request, res = response) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({
            msg: 'GET API - controlador',
            data: usuarios
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el usuario',
            details: error.message
        });
    }
}

const usuariosPost = async (req = request, res = response) => {
    try {
        const body = req.body;
        const usuario = new Usuario(body);
        await usuario.save()
        res.status(200).json({
            msg: 'POST API - controlador',
            post: body,
            usuario: usuario
        });
    } catch (error) {
        res.status(400).json({
            msg: 'se detecto un error',
            detalle: error.message
        });
    }
};


const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    const body = req.body;
    console.log(req.body);
    res.status(200).json({
        msg: 'PUT API - controlador',
        id: id,
        body: body
    });
};


const usuariosDelete = (req = request, res = response) => {
    const { id } = req.params;
    res.status(200).json({
        msg: 'DELETE API - controlador',
        id
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}