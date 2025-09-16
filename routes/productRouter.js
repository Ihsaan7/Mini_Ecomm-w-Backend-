const express = require("express")
const debug = require("debug")("mini-ecommerce:product")
const router = express.Router()
const upload = require("../config/multerConfig")

// router.get("/",(req,res)=>
//     {
//         debug("Product route accessed")
//         res.send("hey its Working - Product Route")
//     })
router.post("/create", upload.single("image") ,(req,res)=>
    {
       res.send(req.file)
    })

module.exports = router
