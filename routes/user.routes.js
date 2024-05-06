const express = require("express");
const { userController } = require("../controller/users");
const upload = require("../startup/multer.startup");
const Auth = require("../middlewares/Auth");

const router = express.Router();

// router.get("/:id" , userController.getUsers);
router.get("/", userController.getUsers);
// router.post("/signup", upload.fields([{ name: "profilePhoto", maxCount: 1 }, { name: "coverPhoto", maxCount: 1 }]) ,  userController.create);
// router.post("/signup", upload.array("file", 2), userController.create);
router.post("/signup", userController.create);
router.post("/login", userController.login);
// router.post(
//   "/update",
//   [
//     Auth,
//     upload.fields([
//       { name: "profilePhoto", maxCount: 1 },
//       { name: "coverPhoto", maxCount: 1 },
//     ]),
//   ],
//   userController.update
// );
router.post("/update",Auth,userController.update);
router.post("/delete/:id", userController.delete);

module.exports.userRouter = router;
