const express = require("express")
const debug = require("debug")("mini-ecommerce:user")
const router = express.Router()
const {registerUser} = require("../controllers/authController")
const {loginUser} = require("../controllers/authController")

router.get("/",(req,res)=>
    {
        debug("User route accessed")
        res.send("hey its Working - User Route")
    })
router.post("/register" , registerUser );

router.post("/login" , loginUser )

module.exports = router
