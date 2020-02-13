const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.json({ 'Msg': 'Olá Mundo!' });
});

module.exports = route;
