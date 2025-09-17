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
        let success = req.flash("success")
        const productData =await productModel.find()
        res.render("shop",{productData ,success})
    })
router.get("/cart",isLoggedIn, async(req,res)=>
    {
        const user =await userModel.findOne({email:req.user.email}).populate("cart")
        res.render("cart",{user})
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

        req.flash("success","Added to Cart")
        res.redirect("/shop")
    })

router.post("/removeCart/:prodId",isLoggedIn, async(req,res)=>
    {   
        try {
            let user = await userModel.findOne({email:req.user.email})
            user.cart = user.cart.filter(item => item.toString() !== req.params.prodId)
            await user.save()
            
            res.json({ success: true, message: "Item removed from cart" })
        } catch (error) {
            res.status(500).json({ success: false, message: "Error removing item" })
        }
    })

module.exports = router