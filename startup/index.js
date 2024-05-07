
// const cors = require("cors");


module.exports =  async (app)=>{
    const PORT =  process.env.PORT || 5000;
    console.log(PORT)

    await require("./db.startup")();

   
    


    require("./multer.startup") 

    require("./routes.startup")(app);


    



    app.listen(PORT , ()=>{
        console.log("listening to port:" , PORT);
    })
}