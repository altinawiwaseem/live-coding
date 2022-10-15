const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.post('/register', userController.handleRegister)
router.get('/login', userController.handleLogin)


module.exports = router;