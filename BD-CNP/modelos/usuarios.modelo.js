const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let usuariosSchema = new Schema ({
    nombre: {
    type:String,
    required: [true, "El nombre es requerido"]
    },
    apellido: {
        type:String,
        required: [true, "El apellido es requerido"]
    },
    direccion:{
        type:String,
        required: [true, "El correo es requerido"]
    },
    celular:{
        type:String,
        required: [true, "el numero es requerido"]
    },
    telefono:{
        type:String,
        required: [false]
    },
    categoria:{
        type:String,
        required:[true, "la categoria es requerida"]
    },
    correo:{
        type:String,
        required: [true, "el correo es requerido"]
    },
    contraseña: {
        type: String,
        required: [true, "la contraseña es requerida"]
    }
})

module.exports = mongoose.model("usuarios",usuariosSchema)