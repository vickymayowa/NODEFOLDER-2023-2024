const express = require("express");
const router = express.Router();
const {
  register,
  userWelcome,
  login,
  logout,
} = require("../controllers/user.controllers");

router.get("/", userWelcome);
router.get("/api/register", register);
router.get("/api/login", login);
router.get("/api/logout",logout)


module.exports = router;
