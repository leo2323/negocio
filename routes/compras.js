"use strict"
const express = require("express")
const router = express.Router()






router.get("/", (req,res)=>{
    res.render("compras")
})


module.exports = router;