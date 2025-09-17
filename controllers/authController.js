const userModel = require("../models/user")
const bcrypt = require("bcrypt")
const {generateToken} = require("../utils/generateToken")



module.exports.registerUser =async function (req,res)
    {
        try{
             const {username , email , password} = req.body;
                let userExist =await userModel.findOne({username})
                if(userExist) return res.status(401).send("User already Exist, Please login")

             let salt =await bcrypt.genSalt(12);
             const hashPass = await bcrypt.hash(password , salt)

             const user = await userModel.create({
                username,
                password: hashPass,
                email
             })
             let token =  generateToken(user)
             res.cookie("token" , token)
             res.redirect("/users/login")
        }catch(err){ res.send(err.message)}
    }

module.exports.loginUser = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.status(401).send("Email or Password Incorrect!");

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) return res.status(401).send("Email or Password Incorrect!");

    const token = generateToken(user);
    res.cookie("token", token);
    res.redirect("/shop")
  } catch (err) {
    res.status(500).send(err.message);
  }
};