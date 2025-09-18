const express = require('express');
const { getSignin, getSignup, postSignup, postSignin, getDashboard } = require('../controllers/user.controller');
const router = express.Router();

// Define routes and link them to controller functions
router.get('/signin', getSignin);
router.get('/', getSignup);
router.post('/signup', postSignup);
router.post('/signin', postSignin);
router.get('/dashboard', getDashboard);

module.exports = router;