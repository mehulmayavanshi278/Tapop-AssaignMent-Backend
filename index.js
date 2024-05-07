require('dotenv').config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser=require('body-parser');
const fileUpload = require("express-fileupload")
const app = express();
const path = require("path");



// app.use(express.static(path.join(__dirname,"/public/Images")));
app.use(express.static("public"));
app.use(express.json());
app.use(cors({
  origin: "https://tapop-assaign-ment-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
  credentials: true,
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