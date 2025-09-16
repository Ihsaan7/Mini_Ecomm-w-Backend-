const express = require("express")
const debug = require("debug")("mini-ecommerce:owner")
const router = express.Router()


// console.log(process.env.NODE_ENV)

router.get("/",(req,res)=>
    {
         let flash = req.flash("Success")
         res.render("productCreate",{flash})
    })

module.exports = router
