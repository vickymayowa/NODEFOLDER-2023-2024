const express = require("express")
const router = express.Router()
const userWelcome  = require("../controllers/user.controllers")


router.get('/', userWelcome)


module.exports = router