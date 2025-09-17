const jwt = require("jsonwebtoken")
require('dotenv').config()

const generateToken =(user)=>{
    return jwt.sign({email:user.email , id: user._id} , process.env.JWT_SECRET)
}

module.exports.generateToken = generateToken