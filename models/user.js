const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    isAdmin:Boolean,
    contact:Number,
    picture:String,
    fullName:{
        type:String,
        minLength:3,
        trim:true
    },
    cart:{
        type:Array,
        default:[],
    },
    order:{
        type:Array,
        default:[]
    }
})

module.exports = mongoose.model("user", userSchema)