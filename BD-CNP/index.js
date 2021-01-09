require('./config')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


//conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/BD-Nuevo-Porvenir', {useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false,useCreateIndex: true
}, (err, res)=>{
    if(err) throw err;

    console.log("Conectado a la base de datos")
});
//middleware para body parser
app.use(bodyParser.urlencoded({ extended:false}))

app.use(bodyParser.json())


app.listen(process.env.PORT, ()=>{
    console.log(`Habilitado el puerto ${process.env.PORT}`)
})