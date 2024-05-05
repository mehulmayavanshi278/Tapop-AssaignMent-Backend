const { userServices } = require("../Services/services");
const {
  uploadMultipleImages,
  uploadToCloudinary,
} = require("../config/cloudinary");
const { QRCode } = require("../config/generateQR");
const upload = require("../startup/multer.startup");
const jwt = require("jsonwebtoken");
class userController {
  getUsers = async (req, res) => {
    console.log(req.headers.authorization);
    try {
      const decode = jwt.verify(
        req.headers.authorization,
        process.env.JSONTOKEN_SECRET_KEY
      );
      let user = await userServices
        .findById(decode._id)
        .select({ password: 0 });
      return res.status(200).send(user);
    } catch (err) {
      console.log(err);
    }
  };

  create = async (req, res) => {
    //  console.log(req.files);

    const { name, email, password, gender } = req?.body;
    // if(!name || !email || !password){
    //   return res.status(400).json({ error: { message: "Fill all data" } });
    // }
    let checkuser = await userServices.findOne({ email });
    if (checkuser) {
      return res.status(200).send("user alrready exist");
    }
    const img = req.files.map((elm) => {
      return elm.path;
    });
    //  console.log(img)
    const profilePhoto = img[0] ? await uploadToCloudinary(img[0]) : undefined;
    const coverPhoto = img[1] ? await uploadToCloudinary(img[1]) : undefined;
    // console.log(profilePhoto);
    // console.log(coverPhoto);
    console.log(password);

    let newUser = { name, email, password, gender, profilePhoto, coverPhoto };

    newUser = await userServices.create(newUser);
    const QRcode = await QRCode.publish({
      profilePhoto: newUser.profilePhoto,
      _id: newUser._id,
    });
    await userServices.findByIdAndUpdate(newUser._id, { QRcode: QRcode }, {});
    console.log("qrcode:", QRcode);
    await newUser.save();
    return res.status(200).send({ newUser });
  };
  login = async (req, res) => {
    const { email, password } = req?.body;
    try {
      let user = await userServices.findOne({ email });

      const token = await user.generateAuthToken();
      return res.status(200).send({ token });
    } catch (err) {
      console.log(err);
    }
  };
  update = async (req, res) => {
    let id = req.params?.id || req?.user?._id;

    console.log("s", req.files);
    //  console.log(req.body);

    try {
      // const img = req.files.map((elm)=>{
      //   return elm.path
      // })
      //  console.log(img)
      const profilePhoto = req?.files?.profilePhoto
        ? await uploadToCloudinary(req?.files?.profilePhoto[0]["path"])
        : undefined;
      const coverPhoto = req?.files?.coverPhoto
        ? await uploadToCloudinary(req?.files?.coverPhoto[0]["path"])
        : undefined;

      let { name, email, phoneNo } = req.body;
      let body = { name, email, profilePhoto, coverPhoto, phoneNo };

      await userServices.findByIdAndUpdate(id, body);
      return res.status(200).send("updated successfully");
    } catch (err) {
      console.log(err);
    }
  };

  delete = (req, res) => {
    return res.send("work");
  };
}

module.exports.userController = new userController();
