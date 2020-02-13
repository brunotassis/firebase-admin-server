const express = require('express');
const bodyParser = require('body-parser');

/* Instancia do modulo express */
const server = new express();

/* Rotas da aplicação */
server.get('/', (req, res) => {
    res.status(200).json({ Msg: 'Olá Mundo!' });
});

/* Export do servidor */
module.exports = () => {
    server.set('port', process.env.PORT || 3000);
    server.use(bodyParser.json());

    server.listen(server.get('port'), () =>
        console.log(`Server is running on port: ${server.get('port')}`));
}