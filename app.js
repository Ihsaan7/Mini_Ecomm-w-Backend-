const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const path = require("path")
const ownerRouter =require("./routes/ownerRouter")
const userRouter =require("./routes/userRouter")
const productRouter =require("./routes/productRouter")

const db = require("./config/dbConfig")

app.set("view engine", "ejs" )
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname , "public")))


app.use("/owners" , ownerRouter)
app.use("/users" , userRouter)
app.use("/products" , productRouter)



app.listen("8000",()=>{console.log("server is running on 8000")})