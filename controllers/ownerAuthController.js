const ownerModel = require("../models/owner")
const bcrypt = require("bcrypt")
const {generateToken} = require("../utils/generateToken")

module.exports.registerOwner = async function (req, res) {
    try {
        const { fullName, email, password } = req.body;
        let ownerExist = await ownerModel.findOne({ email })
        if (ownerExist) return res.status(401).send("Owner already exists, Please login")

        let salt = await bcrypt.genSalt(12);
        const hashPass = await bcrypt.hash(password, salt)

        const owner = await ownerModel.create({
            fullName,
            password: hashPass,
            email
        })
        let token = generateToken(owner)
        res.cookie("ownerToken", token)
        res.redirect("/owners")
    } catch (err) { 
        res.send(err.message) 
    }
}

module.exports.loginOwner = async function (req, res) {
    try {
        const { email, password } = req.body;
        const owner = await ownerModel.findOne({ email });

        if (!owner) return res.status(401).send("Email or Password Incorrect!");

        const auth = await bcrypt.compare(password, owner.password);
        if (!auth) return res.status(401).send("Email or Password Incorrect!");

        const token = generateToken(owner);
        res.cookie("ownerToken", token);
        res.redirect("/owners")
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports.createDefaultOwner = async function () {
    try {
        // Check if default owner already exists
        const existingOwner = await ownerModel.findOne({ email: "OwnerAdmin@gmail.com" });
        if (existingOwner) {
            return;
        }

        // Create default owner
        let salt = await bcrypt.genSalt(12);
        const hashPass = await bcrypt.hash("123456", salt);

        await ownerModel.create({
            fullName: "OwnerAdmin",
            email: "OwnerAdmin@gmail.com",
            password: hashPass
        });
    } catch (err) {
        console.error("Error creating default owner:", err.message);
    }
};