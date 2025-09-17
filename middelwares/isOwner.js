const jwt = require("jsonwebtoken")
const ownerModel = require("../models/owner")
require('dotenv').config()

module.exports = async function isOwner(req, res, next) {
    if (!req.cookies.ownerToken) {
        req.flash("error", "You must be logged in as owner!")
        return res.redirect("/owners/login")
    } else {
        try {
            let decode = jwt.verify(req.cookies.ownerToken, process.env.JWT_SECRET)
            let owner = await ownerModel.findOne({
                email: decode.email
            }).select("-password")
            req.owner = owner;
            next()
        } catch (err) { 
            req.flash("error", "Something went wrong!"); 
            res.redirect("/owners/login")
        }
    }
}