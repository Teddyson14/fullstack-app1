//отвечает за регестрацию пользователя

const express = require('express');
const router = express.Router()

//lochalhost:3000/api/auth/login

router.get ('/login', (req, res)=>{
    res.status(200).json({
        login: true
    })
})

module.exports = router