const router = require('express').Router();

const userController = require('../controllers/user.controllers');  

router.get('/self', userController.getSelf);
router.post('/update_info', userController.editInfo);
router.get("/get/access_requests", userController.getAccessRequests);
router.post("/update/give_access", userController.giveAccess);
router.post("/update/revoke_access", userController.revokeAccess);

module.exports = router;