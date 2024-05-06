require('dotenv').config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser=require('body-parser');
const fileUpload = require("express-fileupload")
const app = new express();
const path = require("path");



// app.use(express.static(path.join(__dirname,"/public/Images")));
app.use(express.static("public"));
app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000"
  //  origin :"https://tapop-assaign-ment-frontend.vercel.app"
}));
app.use(bodyParser.json())
// app.use( bodyParser.urlencoded({extended: true }));
app.use(fileUpload({
  useTempFiles:true
}))







app.get("/" , (req , res)=>{
    return res.send("ok");
})




require("./startup/index")(app);