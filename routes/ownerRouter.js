const express = require("express")
const debug = require("debug")("mini-ecommerce:owner")
const router = express.Router()
const { loginOwner } = require("../controllers/ownerAuthController")
const isOwner = require("../middelwares/isOwner")
const productModel = require("../models/product")

// Owner authentication routes
router.get("/login", (req, res) => {
    let error = req.flash("error")
    res.render("ownerLogin", { error })
})

router.post("/login", loginOwner)

router.get("/logout", (req, res) => {
    res.cookie("ownerToken", "")
    res.redirect("/owners/login")
})

// Protected owner routes
router.get("/", isOwner, (req, res) => {
    let flash = req.flash("Success")
    res.render("productCreate", { flash })
})

router.get("/products", isOwner, async (req, res) => {
    try {
        const productData = await productModel.find();
        res.render("adminProducts", { productData });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.render("adminProducts", { productData: [] });
    }
});

router.delete("/delete-product/:id", isOwner, async (req, res) => {
    try {
        const productId = req.params.id;
        await productModel.findByIdAndDelete(productId);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Failed to delete product" });
    }
});

module.exports = router;router
