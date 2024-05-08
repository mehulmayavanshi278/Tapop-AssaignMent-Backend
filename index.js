require('dotenv').config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const bodyParser=require('body-parser');
const fileUpload = require("express-fileupload")
const app = express();
const path = require("path");
require("./middlewares/allowcors");
const fs = require("fs");

const tempUploadDirectory = '/var/task/tmp';
// if (!fs.existsSync(tempUploadDirectory)) {
//   fs.mkdirSync(tempUploadDirectory);
// }



// Create directory if it doesn't exist



// app.use(express.static(path.join(__dirname,"/public/Images")));
app.use(express.static("public"));
app.use(express.json());
app.use(cors({
  origin: "https://tapop-assaign-ment-frontend.vercel.app",
  // origin: "http://localhost:3000",
  // origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
  // credentials: true,
  // preflightContinue: true,
  // optionsSuccessStatus: 204,
}));
app.options('*', cors());

// app.use(bodyParser.json())
app.use( bodyParser.urlencoded({extended: true }));
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir: tempUploadDirectory
}))







app.get("/" , (req , res)=>{
    return res.send("ok");
})




require("./startup/index.startup")(app);