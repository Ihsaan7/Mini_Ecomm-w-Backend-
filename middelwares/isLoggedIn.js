const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
require('dotenv').config()

module.exports = async function isLoggedIn(req, res, next)
    {
        if(!req.cookies.token){
            req.flash("error","You must logged In!")
            return res.redirect("/")
        }else{
            
        try{
            let decode = jwt.verify(req.cookies.token , process.env.JWT_SECRET)
            let user = await userModel.findOne({
                email: decode.email
            }).select("-password")
            req.user = user;

            next()
        }catch(err){ req.flash("Error", "Something went wrong!"); res.redirect("/")}
        }
    }