const express = require('express');
const routes = express.Router();

const veiculoController = require('./controllers/VeiculoController');

routes.get('/veiculos', veiculoController.index);
routes.get('/veiculos/:id', veiculoController.show);
routes.post('/veiculos', veiculoController.store);
routes.put('/veiculos/:id', veiculoController.update);
routes.delete('/veiculos/:id', veiculoController.destroy);

module.exports = routes;
