const express = require('express');
const routes = express.Router();
const validateDto = require('./middleware/validate-dto');
const veiculoDto = require('./dto/veiculo');

const veiculoController = require('./controllers/VeiculoController');

routes.get('/veiculos', veiculoController.index);
routes.get('/veiculos/:id', veiculoController.show);
routes.post('/veiculos', validateDto(veiculoDto), veiculoController.store);
routes.put('/veiculos/:id', validateDto(veiculoDto), veiculoController.update);
routes.delete('/veiculos/:id', veiculoController.destroy);

module.exports = routes;
