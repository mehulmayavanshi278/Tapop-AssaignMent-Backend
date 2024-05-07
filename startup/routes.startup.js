




module.exports = (app)=>{

const express = require("express");
const { userRouter } = require("../routes/user.routes");
  
    
    app.use("/user" , userRouter);


    
}





