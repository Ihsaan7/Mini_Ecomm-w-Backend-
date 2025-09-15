const mongoose = require("mongoose")
const config = require("config")
const debug = require("debug")("mini-ecommerce:db")

mongoose
.connect(`${config.get("MONGODB_URI")}`)
.then(()=>{debug("Connected")})
.catch((err)=>{debug(err)})


module.exports = mongoose.connection