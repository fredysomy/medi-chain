const router = require('express').Router();

const userController = require('../controllers/user.controllers');  

router.get('/self', userController.getSelf);



module.exports = router;