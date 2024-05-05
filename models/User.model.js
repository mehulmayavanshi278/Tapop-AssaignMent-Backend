const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo: {
    type: Number,
  },
  profilePhoto: {
    type: String,
    default:
      "https://kacrm.datamaticsbpm.com/assets/images/users/avatar-1.jpeg",
  },
  coverPhoto: {
    type: String,
  },
  gender: {
    type: String,
  },
  password: {
    type: String,
  },
  QRcode: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  console.log(this.password);
  console.log(typeof this.password);
  if (!this.password) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    const hashedPassword = await bcrypt.hash(this.password, salt);

    this.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateAuthToken = async function () {
  const token = jwt.sign(
    { name: this.name, email: this.email, _id: this._id },
    process.env.JSONTOKEN_SECRET_KEY
  );
  await this.save();
  return token;
};

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
