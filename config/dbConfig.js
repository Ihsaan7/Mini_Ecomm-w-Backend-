const mongoose = require("mongoose")
const config = require("config")
const debug = require("debug")("mini-ecommerce:db")
require('dotenv').config();

// Use Vercel-specific MongoDB URI in production, fallback to regular URI
const mongoUri = process.env.NODE_ENV === 'production' && process.env.MONGODB_URI_VERCEL 
  ? process.env.MONGODB_URI_VERCEL 
  : process.env.MONGODB_URI;

mongoose
.connect(mongoUri)
.then(()=>{debug("Connected to MongoDB")})
.catch((err)=>{debug("MongoDB connection error:", err)})


module.exports = mongoose.connection