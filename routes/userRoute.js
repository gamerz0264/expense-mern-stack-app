const express = require('express');
const { loginController, registerCallback } = require('../controllers/userController');

// router object
const router = express.Router()

// routers
// POST || LOGIN USER
router.post('/login', loginController);

// POST || REGISTER USER
router.post('/register', registerCallback);


module.exports = router;