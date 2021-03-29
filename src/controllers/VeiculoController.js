const Veiculo = require('../models/Veiculo');

class VeiculoController {
    async index(req, res) {      
        const veiculos = await Veiculo.find();
        return res.json(veiculos);       
    }

    async show(req, res) {
        const veiculo = await Veiculo.findById(req.params.id);
        return res.json(veiculo);
    }

    async store(req, res) {        
        const veiculo = await Veiculo.create(req.body);               
        return res.status(201).json(veiculo);      
    }

    async update(req, res) {
        const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(veiculo);
    }

    async destroy(req, res) {
        await Veiculo.findByIdAndRemove(req.params.id);
        return res.status(204).send();
    }
}

module.exports = new VeiculoController();
    