const Usuarios = require('../modelos/usuarios.modelo')

let mostrarUsuarios = (req, res) =>{

    Usuarios.find({})
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