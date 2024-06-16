const AuthControllers = require('../controllers/AuthControllers');
const express = require('express');
const router = express.Router();
router.post('/register',AuthControllers.registerUserController)

// router.post '/login'

module.exports = router
