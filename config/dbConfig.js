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
  bufferCommands: false, // Disable mongoose buffering
  maxPoolSize: 10, // Maintain up to 10 socket connections
  family: 4 // Use IPv4, skip trying IPv6
};

// Function to connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, connectionOptions);
    debug("Connected to MongoDB successfully");
    return mongoose.connection;
  } catch (err) {
    debug("MongoDB connection error:", err);
    throw err;
  }
};

module.exports = { connectDB, connection: mongoose.connection }