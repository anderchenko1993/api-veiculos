const mongoose = require('mongoose');
const { Schema } = mongoose;

const VeiculoSchema = new Schema({
    veiculo: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    vendido: {
        type: Boolean,
        required: true,
    }, 
}, { timestamps: true});

module.exports = mongoose.model('Veiculo', VeiculoSchema);