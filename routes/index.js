const express = require("express")
const debug = require("debug")("mini-ecommerce:owner")
const router = express.Router()
const isLoggedIn = require("../middelwares/isLoggedIn")
const productModel = require("../models/product")
const userModel = require("../models/user")



router.get("/",(req,res)=>
    {
        let error = req.flash("error")
        res.render("signup",{error, loggedIn:false})
    })

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

router.get("/addCart/:prodId",isLoggedIn, async(req,res)=>
    {   
        let user = await userModel.findOne({email:req.user.email})
        user.cart.push(req.params.prodId)
        await user.save()

    })

module.exports = router