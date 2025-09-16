const express = require("express")
const debug = require("debug")("mini-ecommerce:owner")
const router = express.Router()
const isLoggedIn = require("../middelwares/isLoggedIn")
const productModel = require("../models/product")

router.get("/shop",isLoggedIn, async(req,res)=>
    {
        const productData =await productModel.find()
        res.render("shop",{productData})
    })

router.get("/logout",(req,res)=>
    {   
        res.cookie("token", "")
        res.redirect("/")
    })

module.exports = router