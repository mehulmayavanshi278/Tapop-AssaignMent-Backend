require('dotenv').config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser=require('body-parser');
const app = new express();





app.use(express.json());
app.use(cors());


// app.use(bodyParser.json())
// app.use(express.urlencoded({extended:true})); 
// app.use(bodyParser.urlencoded({ extended: true }))




app.get("/" , (req , res)=>{
    return res.send("ok");
})




require("./startup/index")(app);