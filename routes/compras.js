"use strict"
const express = require("express")
const router = express.Router()
const productos = require("../stock.js")
const d= document
const contProd = d.getElementById('c-prod')

productos.forEach(producto => {
    const div = document.createElement('div')
    div.innerHTML = `
    <img src=${producto.img} alt="producto">
    <p>${producto.nombre}</p>
    <h3>${producto.precio}</h3>
    `
});





router.get("/", (req,res)=>{
    res.render("compras")
})


module.exports = router;
