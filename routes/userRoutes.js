const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/login',UserController.login);
router.post('/signup',UserController.createUser);

module.exports = router;