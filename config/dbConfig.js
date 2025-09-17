const mongoose = require("mongoose")
const config = require("config")
const debug = require("debug")("mini-ecommerce:db")
require('dotenv').config();

// Use Vercel-specific MongoDB URI in production, fallback to regular URI
const mongoUri = process.env.NODE_ENV === 'production' && process.env.MONGODB_URI_VERCEL 
  ? process.env.MONGODB_URI_VERCEL 
  : process.env.MONGODB_URI;

// Connection options for better reliability in serverless environment
const connectionOptions = {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
  bufferMaxEntries: 0, // Disable mongoose buffering
  bufferCommands: false, // Disable mongoose buffering
  maxPoolSize: 10, // Maintain up to 10 socket connections
  minPoolSize: 5, // Maintain a minimum of 5 socket connections
  maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose
.connect(mongoUri, connectionOptions)
.then(()=>{debug("Connected to MongoDB")})
.catch((err)=>{debug("MongoDB connection error:", err)})


module.exports = mongoose.connection