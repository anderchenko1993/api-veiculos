const mongoose = require('mongoose');
const Veiculo = require('../models/Veiculo');

module.exports = {
    async index(req, res) {
        try{
            const veiculos = await Veiculo.find();
            return res.json(veiculos);
        } catch(error) {
            return res.json(error);
        }        
    },

    async show(req, res) {
        const veiculo = await Veiculo.findById(req.params.id);
        return res.json(veiculo);
    },

    async store(req, res) {
        try {
            const veiculo = await Veiculo.create(req.body);               
            return res.status(201).json(veiculo);
        } catch(error) {
            return res.status(401).json(error);
        }
      
    },

    async update(req, res) {
        try {
            const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
            return res.status(200).json(veiculo);
        } catch(error) {
            return res.status(401).json(error);
        }      
    },

    async destroy(req, res) {
        await Veiculo.findByIdAndRemove(req.params.id);
        return res.status(204).send();
    }
}
    