
// const cors = require("cors");


module.exports =  async (app)=>{
    const PORT =  process.env.PORT;
    console.log("port is:" , PORT)

    await require("./db.startup")();

   
    


    require("./multer.startup") 
    require("../config/cloudinary")

    require("./routes.startup")(app);


    



    app.listen(PORT , ()=>{
        console.log("listening to port:" , PORT);
    })
}