const express = require('express');
const mongoose = require('mongoose');
const UsuarioSchema = require("./Modelos/Usuario.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Conexion base de datos.

mongoose.connect("mongodb+srv://clustercris:nPCIgMR9XpiHat0Y@criscluster.o7zrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/', (req, res) => {
    res.send("Este es el incio de mi primera API");
});

//Consultar 

router.get('/Usuario', (req, res) =>{
    UsuarioSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo los usuarios");
        }else{
            res.send(datos);
        }
    })
})

// Insertar
router.post('/Usuario', (req, res) =>{
    let nuevoUsuario = new UsuarioSchema({
        userId: req.body.id,
        userName: req.body.nombre,
        celUser: req.body.telefono,
        cityUser: req.body.ciudad
    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Usuario Almacenado")
    })
})

app.use(router);
app.listen(3000, ()=> {
    console.log("Servicio  corriendo en el puerto 3000")
});