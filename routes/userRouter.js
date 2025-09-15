const express = require("express")
const debug = require("debug")("mini-ecommerce:user")
const router = express.Router()
const userModel = require("../models/user")
const bcrypt = require("bcrypt")

router.get("/",(req,res)=>
    {
        debug("User route accessed")
        res.send("hey its Working - User Route")
    })
router.post("/register",async(req,res)=>
    {
        try{
             const {username , email , password} = req.body;
             let salt =await bcrypt.genSalt(12);
             const hashPass = await bcrypt.hash(password , salt)

             const user = await userModel.create({
                username,
                password: hashPass,
                email
             })
             res.send(user)
        }catch(err){ res.send(err.message)}
    })

module.exports = router
