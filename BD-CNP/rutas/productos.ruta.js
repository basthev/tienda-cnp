const Productos = require('../controladores/productos.controlador');
const express = require('express');
const app = express();


app.get('./mostrar-productos', Productos.mostrarProductos);

module.exports = app;