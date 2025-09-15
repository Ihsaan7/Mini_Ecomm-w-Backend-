const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    description: String,
    category: String,
    imageUrl: String,
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);