"use strict";
const express = require('express');

var router = express.Router();

router.all("*", (req, res) => {
  res.send("hit the api");
});
module.exports = router
