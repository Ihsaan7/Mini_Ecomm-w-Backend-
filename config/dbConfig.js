const mongoose = require("mongoose")

mongoose
.connect("mongodb+srv://Test:CUHSb1Q37L0Na1JP@cluster0.ip1tc2f.mongodb.net/miniEcom?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("Connected")})
.catch((err)=>{console.log(err)})


module.exports = mongoose.connection