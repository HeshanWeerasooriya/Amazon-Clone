console.log("Hello World!")

// Import express
const express = require("express");

const PORT = 3000;

const app = express();

//CREATING AN API

//http://localhost:3000/hello-world
app.get("/hello-world", (req, res) => {
    res.send( "hello world!");
});

//http://localhost:3000/hello-world-json
app.get("/hello-world-json", (req, res) => {
    res.json({ hi: "hello world!"});
   
});

app.listen(PORT, () => {
    console.log('connected at port ' + PORT);
});

