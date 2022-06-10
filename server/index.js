// IMPORT FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth')

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://Heshan:8HitDJonCvRc9Yjf@cluster0.syxew.mongodb.net/?retryWrites=true&w=majority";

//MIDDLEWARE
app.use(authRouter);

//CONNECTIONS
mongoose.connect().then(() =>{
    console.log("Connection Successfull");
})
.catch((e) => {
    console.log(e);
});

app.listen(PORT, () => {
    console.log('connected at port ' + PORT);
});
