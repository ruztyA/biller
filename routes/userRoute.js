const userRouter = require("express").Router();
const { userAuthorization } = require("../middleware/authMiddleware");
const { validate } = require("../middleware/validateRequestMiddleware");
const firebase = require("../middleware/firebaseMiddleware");
const { updateSchema } = require("../schema/requestSchema");
const userController = require("../controller/userController");

userRouter.put("/update", [userAuthorization, validate(updateSchema)], userController.updateUser);
userRouter.post("/upload-profile", firebase.upload.single("image"), userController.updatePhoto);
userRouter.post("/info", userAuthorization, userController.getUser);

module.exports = userRouter;

