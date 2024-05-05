
// const cors = require("cors");
const PORT =  process.env.PORT || 5000;

module.exports =  async (app)=>{

    await require("./db.startup")();

   
    
    require("./routes.startup")(app);

    require("./multer.startup") 


    



    app.listen(PORT , ()=>{
        console.log("listening to port:" , PORT);
    })
}