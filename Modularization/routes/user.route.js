const express = require("express");
const router = express.Router();
const {
  register,
  userWelcome,
  login,
  logout,
  dashboard,
} = require("../controllers/user.controllers");

router.get("/", userWelcome);
router.post("/api/register", register);
router.post("/api/login", login);
router.post("/api/dashboard", dashboard);
router.post("/api/logout",logout)


module.exports = router;
