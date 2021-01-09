const mongoose = require('mongoose')

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

module.exports = mongoose.model("productos", productoSchema)