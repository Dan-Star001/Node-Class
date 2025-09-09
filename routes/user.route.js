const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define routes and link them to controller functions
router.get('/signin', userController.getSignin);
router.get('/', userController.getSignup);
router.post('/login', userController.postLogin);
router.get('/dashboard', userController.getDashboard);

module.exports = router;