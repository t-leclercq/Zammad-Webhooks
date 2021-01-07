const express = require('express');
const bodyParser = require('body-parser');

const ticketsRoutes = require('./routes/ticket');

const app = express();
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res) => {

    res.json({ message: 'Votre requête a bien été reçue !' });

});

app.use('/api/tickets', ticketsRoutes);

module.exports = app;