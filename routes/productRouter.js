const express = require("express")
const debug = require("debug")("mini-ecommerce:product")
const router = express.Router()
const upload = require("../config/multerConfig")
const productModel = require("../models/product")
const isOwner = require("../middelwares/isOwner")


router.post("/create", isOwner, upload.single("image") ,async (req,res)=>
    {
        
     try{   const {name , price  , discount , bgColor , panelColor,textColor} = req.body

        let product =await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgColor,
            panelColor,
            textColor
        })
        req.flash("Success", " Prodcut Created!")
        res.redirect("/owners")
    }catch(err){res.send(err.message)}
    })

module.exports = router
