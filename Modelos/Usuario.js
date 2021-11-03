const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    userId: Number,
    userName: String,
    celUser: Number,
    cityUser: String
});

module.exports = mongoose.model('usuario',UsuarioSchema, 'Usuarios');