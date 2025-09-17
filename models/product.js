const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    description: String,
    category: String,
    image: Buffer,
    name: String,
    price:Number,
    bgColor:String,
    panelColor:String,
    textColor:String,
    discount:{
      type:Number,
      default:0,
    },
    createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);