
const express = require("express");
const { userRouter } = require("../routes/user.routes");



module.exports = (app)=>{
  
    
    app.use("/user" , userRouter);


    
}





