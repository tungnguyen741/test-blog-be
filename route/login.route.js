const express = require('express');
const controller = require('../controller/login.controller');
const validate = require('../validate/login.validate');
const route = express.Router();

route.post('/', controller.login)


module.exports = route;