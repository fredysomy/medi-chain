const router = require("express").Router();

const DoctorController = require("../controllers/doctor.controllers");

router.get("/fetch_user", DoctorController.getUserById);
router.post("/create/entry", DoctorController.createEntry);

module.exports = router;
