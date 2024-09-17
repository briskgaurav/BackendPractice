const express = require("express");
const app = express();

// rout 1

app.get("/", (req, res) => {
  res.send("error handlerr page 1");
});

// middleware

app.use(function (req, res, next) {
  console.log("lalalal");
  next();
});

app.get("/profile", (req, res,next) => {
  return next(new Error("not implemented"));
});
 
//errorHandler

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
app.listen(3000)
