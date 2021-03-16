const express = require('express');
const controller = require('../controller/create.controller');
const validate = require('../validate/create.validate');
const route = express.Router();

route.post('/', validate.postCreate, controller.createUser)

module.exports = route;