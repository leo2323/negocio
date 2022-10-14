const express = require("express");
const app= express()
const hbs = require("hbs");
const path = require("path");
const PORT = 4500;


//Route Index encargado de ruta index
const routeIndex = require("./routes/index")
const contacto = require("./routes/contacto")
const registro = require("./routes/registro")
const compras = require("./routes/compras")
const usuario = require("./routes/usuario")
const logueo = require("./routes/logueo")

//seteo motor de plantillas
app.set("view engine", "hbs");
app.set("views " , path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"))
//registro public para los estilos, img y js
app.use(express.static(path.join(__dirname, "public")))


//uso de rutas
app.use("/", routeIndex)
app.use("/contacto", contacto)
app.use("/registro", registro)
app.use("/compras",compras)
app.use("/usuario", usuario)
app.use("/logueo", logueo)



app.listen(PORT, (err) => {
    err ?
    console.log(err):
    console.log("servidor corriendo en: ", PORT)
});