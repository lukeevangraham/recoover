const router = require("express").Router();
const checkInRoutes = require("./checkIns");

router.use("/checkIns", checkInRoutes);

module.exports = router;
