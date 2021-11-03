const express = require("express");
const mongoose  = require("mongoose");
const app = express();
const route = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Conexion base de datos.

mongoose.connect("mongodb+srv://clustercris:nPCIgMR9XpiHat0Y@criscluster.o7zrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

app.use(route);
app.listen(3000,()=> {
    console.log("servidor")
});