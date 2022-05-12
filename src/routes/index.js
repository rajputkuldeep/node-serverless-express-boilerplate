const express = require("express"),
  router = express.Router();

const apiRoute = require("./api");


// Api router
router.use("/api", apiRoute);


module.exports = router;
