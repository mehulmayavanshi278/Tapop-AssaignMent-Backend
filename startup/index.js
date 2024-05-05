
// const cors = require("cors");
const PORT = 5000 || process.env.PORT;

module.exports =  async (app)=>{

    await require("./db.startup")();

   
    
    require("./routes.startup")(app);

    require("./multer.startup")


    



    app.listen(PORT , ()=>{
        console.log("listening to port:" , PORT);
    })
}