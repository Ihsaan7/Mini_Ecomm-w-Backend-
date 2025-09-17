const express = require("express")
const debug = require("debug")("mini-ecommerce:user")
const router = express.Router()
const {registerUser} = require("../controllers/authController")
const {loginUser} = require("../controllers/authController")
const isLoggedIn = require("../middelwares/isLoggedIn")


router.post("/register" , registerUser );

router.get("/login",(req,res)=>{
    let error = req.flash("error")
    res.render("login",{error, loggedIn:false})
  
})
router.post("/login" , loginUser )



    
module.exports = router
