const Productos = require('../modelos/productos.modelo')

let mostrarProductos = (req, res) =>{

    Productos.find({})
    .exec((err,data)=>{
        if (err) {
            return res.json({
                status:500,
                mensaje: "Error en el servidor"
            })
        }
        res.json({
            status: 200,
            data
        })
    })

}   

    module.exports = {

    mostrarProductos
}