const express = require("express")
const debug = require("debug")("mini-ecommerce:user")
const router = express.Router()
const {registerUser} = require("../controllers/authController")
const {loginUser} = require("../controllers/authController")

router.get("/",(req,res)=>
    {
        res.render("signup")
    })
router.post("/register" , registerUser );

router.get("/login",(req,res)=>{
    res.render("login")
})
router.post("/login" , loginUser )

router.get("/shop",(req,res)=>
    {
        res.render("shop")
    })
module.exports = router
