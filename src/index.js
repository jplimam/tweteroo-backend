const express = require('express');
const cors = require('cors');
const rotas = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(5000, () => {
    console.log('Running on localhost:5000');
})