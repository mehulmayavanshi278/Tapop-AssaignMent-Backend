const jwt = require("jsonwebtoken");

const Auth = async (req, res, next) => {
  try {
    console.log(req.headers);
    console.log(req.headers.authorization);
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JSONTOKEN_SECRET_KEY
    );
    if (!decode) {
      return res.status(400).json({ message: "invalid user" });
    }
    req.user = decode;
    next();
  } catch (err) {
    console.log(err);
  }
};
module.exports = Auth;
