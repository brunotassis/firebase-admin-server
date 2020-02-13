const express = require('express');
const route = express.Router();

const home = require('./home/index');
const users = require('./users/index');

route.use(home);
route.use(users);

module.exports = route;
