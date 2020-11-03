const { verifySignUp } = require("../middlewares");
const authRoute = require('express').Router();
const controller = require("../controllers/auth.controller");

authRoute.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

authRoute.route('/signup')
  .post(
    verifySignUp.checkDuplicateUserNameOrEmail,
    verifySignUp.checkRolesExisted,
    controller.signup);

  authRoute.route('/signin')
  .post(controller.signin)

module.exports = authRoute;


