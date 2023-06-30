const auth = require('../middlewares/Authentication');
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/login',auth,UserController.login);
router.post('/signup',auth,UserController.createUser);

module.exports = router;