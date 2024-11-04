const router = require("express").Router();

const DoctorController = require("../controllers/doctor.controllers");

router.get("/fetch_user", DoctorController.getUserById);

module.exports = router;
