const express = require('express')

const app = express();  // express returns a function


// middleware
app.use((req,res,next)=>{
    console.log("middleware")
    next();
})
app.get("/", (req, res)=>{
    res.send("Hahha milaa")

})
app.use((req,res,next)=>{
    console.log("middleware 2c")
    next();
})
app.get("/profile", (req,res)=>{
    res.send("agya naya page!")
})

app.listen(3000)