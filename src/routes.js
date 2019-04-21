const express = require('express');
const cors = require('cors');



const routes = express.Router();

const EstablishmentController = require('./Controllers/EstablishmentController');

// Control Routes
routes.get('/Establishments', EstablishmentController.index);
routes.post('/Establishment', EstablishmentController.create);
routes.delete('/Establishment/:id', EstablishmentController.delete);
routes.get('/Establishment/:id', EstablishmentController.findEstablishmentById);
routes.put('/Establishment/:id', EstablishmentController.update);

module.exports = routes;