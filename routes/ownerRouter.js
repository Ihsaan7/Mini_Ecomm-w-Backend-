const express = require("express")
const debug = require("debug")("mini-ecommerce:owner")
const router = express.Router()


// console.log(process.env.NODE_ENV)

router.get("/",(req,res)=>
    {
        debug("Owner route accessed")
        res.send("hey its Working - Owner Route")
    })

module.exports = router
