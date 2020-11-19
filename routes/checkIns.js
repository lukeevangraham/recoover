const router = require("express").Router();
const checkInController = require("../controllers/checkIn")

router.post("/", checkInController.post)
router.get("/:id", checkInController.getOneRecent)

module.exports = router;