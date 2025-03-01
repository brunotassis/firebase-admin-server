const express = require('express');
const bodyParser = require('body-parser');

/* Instancia do modulo express */
const server = new express();

/* Rotas da aplicação */
const routes = require('./routes/index');

/* Export do servidor */
module.exports = () => {
    server.set('port', process.env.PORT || 3000);

    server.use(bodyParser.json());
    server.use(routes);

    server.listen(server.get('port'), () =>
        console.log(`Server Running: ${server.get('port')}`));
}