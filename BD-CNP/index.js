const express = require('express');
const mongoose = require('mongoose');
const app = express();

//conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/BD-Nuevo-Porvenir', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true
}, (err, res)=>{
    if(err) throw err;

    console.log("Conectado a la base de datos")
});

let Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre:{
        type:String,
        required:[true,"El nombre es requerido"]

    },
    peso:{
        type:String,
        required:false
    },
    valor:{
        type: Number,
        required:[true, "El valor es requerido"]
    },
    categoria:{
        type:String,
        required:[true, "La categoria es requerida"]
    },
    marca :{
        type: String,
        required:false
    },
    imagen:{
        type: String,
        required:[true, "La foto es requerida"]
    },
    id:{
        type: Number,
        required:[true,"El id es requerido"]
    }

})

const Productos = mongoose.model("Productos", productoSchema)

app.get('/',(req,res)=>{
    Productos.find({})
        .exec((err, data)=>{
            if(err) {
            return res.json({
                status: 500,
                mensaje: "Error en la preticion" 
            })
        }

        res.json({
            status: 200,
            data
        })

    })
})
//Peticiones GET

//Peticiones POST
//Peticiones PUT
//Peticiones DELETE

app.listen(4000, ()=>{
    console.log("Habilitado el puesto 4000")
})