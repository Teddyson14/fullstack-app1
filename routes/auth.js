//отвечает за регестрацию пользователя

const express = require('express');
const controllers = require ('../controllers/auth.js');
const { route } = require('../app');
const router = express.Router()

//lochalhost:3000/api/auth/login
router.get ('/login', controllers.login)

//lochalhost:3000/api/auth/register
router.get('/register', controllers.register)

module.exports = router