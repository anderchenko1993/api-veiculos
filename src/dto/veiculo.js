const yup = require('yup');

module.exports = yup.object().shape({
    veiculo: yup.string().required(),
    marca: yup.string().required(),
    ano: yup.number().required().positive().integer(),
    descricao: yup.string().required(),
    vendido: yup.boolean().required(),
});