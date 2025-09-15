const mongoose = require("mongoose")
const product = require("./product")

const ownerSchema = mongoose.Schema({
    email:String,
    password:String,
    picture:String,
    fullName:{
        type:String,
        minLength:3,
        trim:true
    },
    product:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("owner", ownerSchema)