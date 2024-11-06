const router = require("express").Router();

const DoctorController = require("../controllers/doctor.controllers");
const { checkAccess } = require("../middlewere/checkAccess");

router.get("/fetch_user", DoctorController.getUserById);
router.post("/create/entry", checkAccess, DoctorController.createEntry);
router.post("/request_access",DoctorController.requestAccess)
router.get("/patient/posts", DoctorController.getUserPosts);
router.get("/patient/post/:id", DoctorController.getPost);
router.get("/patient/files/:hash", DoctorController.getFiles);

module.exports = router;
