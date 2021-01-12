const Usuarios = require('../controladores/usuarios.controlador)
const express = require('express');
const app = express();
app.get('./mostrar-usuarios', Usuarios.mostrarUsuarios);

module.exports = app;