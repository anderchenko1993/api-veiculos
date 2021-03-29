const ApiError = require('../error/api-error');

function validateDto(schema) {
    return async(req, res, next) => {
        try {
            await schema.validate(req.body);
            next();
        } catch(err) {
            next(ApiError.badRequest(err));
        }
    }
} 

module.exports = validateDto;