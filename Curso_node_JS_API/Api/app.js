const express = require('express');
const app = express();
const config = require('./config');
const Clientes = require('./controllers/clientes');

//Funcionalidades de clientes:

app.get('/clientes/getALL', (req, res) => {
    let clientes = new Clientes ({
        nombre: 'juan',
        apellido: 'Perez',
        documento: '1234'

    });

    res.send (clientes.getALL())

});

app.post('/clientes/getall', (req, res) => {
    res.send ('add  clientes');
});

app.put('/clientes/getall', (req, res) => {
    res.send ('update clientes');

});

app.delete('/clientes/getall', (req, res) => {
    res.send ('delete clientes');
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}...`);
});