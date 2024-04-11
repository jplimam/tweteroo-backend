const express = require('express');
const { signUp, criarTweet, listarTweet } = require('../controllers/usuariosControllers');

const rotas = express();

rotas.post('/sign-up', signUp);
rotas.post('/tweets', criarTweet);
rotas.get('/tweets', listarTweet);

module.exports = rotas;