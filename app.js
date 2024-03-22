const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRouter = require('./routes/auth.js');
const app = express();
const keys = require('./config/keys.js')

mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDb Connected'))
    .catch(error => console.log(error))

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json)

app.use ('/api/auth', authRouter)

module.exports = app;