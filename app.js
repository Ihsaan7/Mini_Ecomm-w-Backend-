

// Load environment variables from .env file
require('dotenv').config()

const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const path = require("path")
const debug = require("debug")("mini-ecommerce:app")
const ownerRouter =require("./routes/ownerRouter")
const userRouter =require("./routes/userRouter")
const productRouter =require("./routes/productRouter")
const indexRouter = require("./routes/index")
const expSession = require("express-session")
const flash = require("connect-flash")


const { connectDB, connection } = require("./config/dbConfig")
const { createDefaultOwner } = require("./controllers/ownerAuthController")

// Debug logging middleware
app.use((req, res, next) => {
    debug(`${req.method} ${req.url} - ${new Date().toISOString()}`)
    next()
})
app.use(
    expSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION,
}) 
);
app.use(flash())
app.set("view engine", "ejs" )
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname , "public")))



app.use("/" , indexRouter)
app.use("/users" , userRouter)
app.use("/owners" , ownerRouter)
app.use("/products" , productRouter)



const PORT = process.env.PORT || 8000

// Start server only after database connection is established
const startServer = async () => {
    try {
        // Connect to database first
        await connectDB();
        debug("Database connected successfully");
        
        // Create default owner account after connection is established
        await createDefaultOwner();
        
        // Start the server
        app.listen(PORT, () => {
            debug(`Server started on port ${PORT}`);
        });
    } catch (error) {
        debug("Failed to start server:", error);
        process.exit(1);
    }
};

// Start the application
startServer();