const express = require("express")
const debug = require("debug")("mini-ecommerce:user")
const router = express.Router()
const {registerUser} = require("../controllers/authController")
const {loginUser} = require("../controllers/authController")
const isLoggedIn = require("../middelwares/isLoggedIn")

router.get("/",(req,res)=>
    {
        res.render("signup")
    })
router.post("/register" , registerUser );

router.get("/login",(req,res)=>{
    res.render("login")
})
router.post("/login" , loginUser )

router.get("/shop",isLoggedIn,(req,res)=>
    {
        res.render("shop")
    })
router.get("/logout",(req,res)=>
    {
        res.cookie("token", "")
        res.redirect("/")
    })
    
module.exports = router
