const express = require('express');

const { api } = require('../config');
const app = express();

const character = require('./components/character');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use('/api/character', character);


app.listen(api.port, () =>{
    console.log("Servidor escuchando en puerto ", api.port);
})