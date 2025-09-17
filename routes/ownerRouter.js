const express = require("express")
const debug = require("debug")("mini-ecommerce:owner")
const router = express.Router()
const { registerOwner, loginOwner } = require("../controllers/ownerAuthController")
const isOwner = require("../middelwares/isOwner")

// Owner authentication routes
router.get("/login", (req, res) => {
    let error = req.flash("error")
    res.render("ownerLogin", { error })
})

router.post("/login", loginOwner)

router.get("/register", (req, res) => {
    let error = req.flash("error")
    res.render("ownerRegister", { error })
})

router.post("/register", registerOwner)

router.get("/logout", (req, res) => {
    res.cookie("ownerToken", "")
    res.redirect("/owners/login")
})

// Protected owner routes
router.get("/", isOwner, (req, res) => {
    let flash = req.flash("Success")
    res.render("productCreate", { flash })
})

module.exports = router
