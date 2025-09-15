const express = require("express")
const debug = require("debug")("mini-ecommerce:product")
const router = express.Router()

router.get("/",(req,res)=>
    {
        debug("Product route accessed")
        res.send("hey its Working - Product Route")
    })

module.exports = router
