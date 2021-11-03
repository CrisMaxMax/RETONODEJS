const mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    typeDocument : String,
    userId: Number,
    userName: String,
    userLastName : String,
    userAddress : String,
    userMail : String,
    phoneUser : Number,
    descripcion : String,
    celUser: Number,
    sitioweb : String,
    cityUser: String
});

module.exports = mongoose.model('usuario',UsuarioSchema, 'Usuarios');