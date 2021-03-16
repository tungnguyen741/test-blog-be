const express = require('express');
const controller = require('../controller/post.controller');
const route = express.Router();

route.get('/', controller.post)

module.exports = route;