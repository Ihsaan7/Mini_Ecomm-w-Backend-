const mongoose = require("mongoose")
const config = require("config")
const debug = require("debug")("mini-ecommerce:db")
require('dotenv').config();

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{debug("Connected")})
.catch((err)=>{debug(err)})


module.exports = mongoose.connection