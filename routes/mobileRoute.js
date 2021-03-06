const Router = require("express").Router();
const { userAuthorization } = require("../middleware/authMiddleware");
const mobileController = require("../controller/mobileController");

Router.get("/options", userAuthorization, mobileController.getAllMobile);
Router.get("/providers", userAuthorization, mobileController.getProviders);
Router.post("/price-list", userAuthorization, mobileController.getprices);
Router.post("/customer/info", userAuthorization, mobileController.getMobileAcc);
Router.post("/create/new", userAuthorization, mobileController.newMobileBill);
//
module.exports = Router;
