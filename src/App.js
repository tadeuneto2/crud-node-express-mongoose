'use strict';

const express = require('express');
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// models 
const UserModel = require('./models/Users.model');
const BanckAgency = require('./models/BankAgency.model');

// routes
const userRoute = require('./routes/User.route');
const banckAgencyRoute = require('./routes/BankAgency.router')


app.get('/', (req, res) => {
    res.status(200).json({ message: 'API 1.0' })
})

app.use('/user', userRoute);
app.use('/bank', banckAgencyRoute);

module.exports = app;