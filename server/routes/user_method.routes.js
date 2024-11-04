const router = require('express').Router();

const userController = require('../controllers/user.controllers');  

router.get('/self', userController.getSelf);
router.post('/update_info', userController.editInfo);


module.exports = router;