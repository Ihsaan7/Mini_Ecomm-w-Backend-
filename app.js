

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


const db = require("./config/dbConfig")
const { createDefaultOwner } = require("./controllers/ownerAuthController")

// Create default owner account
db.once('open', () => {
    createDefaultOwner()
})

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

app.listen(PORT, () => {
    debug(`Server started on port ${PORT}`)
})