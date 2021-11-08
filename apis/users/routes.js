const express = require("express");
const router = express.Router();
// const passport = require("passport");

const { signup } = require("./controllers");

router.post("/signup", signup);

module.exports = router;
