const express = require('express');
const route = express.Router();

route.get('/users', (req, res) => {
    res.status(200).json({});
});

module.exports = route;
