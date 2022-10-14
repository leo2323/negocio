"use strict"
const express = require("express")
const router = express.Router()






router.get("/compras", (req,res)=>{
    res.render("compras")
})


module.exports = router;