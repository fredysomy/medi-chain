const router = require('express').Router();

const fileController = require('../controllers/file.controllers');


router.post('/user/profile', fileController.uploadFile);


module.exports = router;