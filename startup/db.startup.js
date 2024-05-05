const mongoose = require("mongoose");
// const URL = "mongodb+srv://mehulmayavanshi953:OsXIqS1mzjmmkEJN@cluster0.ps9etta.mongodb.net/?retryWrites=true&w=majority";
const URL =
  "mongodb+srv://mehulmayavanshi953:OsXIqS1mzjmmkEJN@cluster0.ps9etta.mongodb.net/?retryWrites=true&w=majority";

module.exports = () => {
  return mongoose
    .connect(URL)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
