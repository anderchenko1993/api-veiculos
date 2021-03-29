class ApiError {
    constructor(code, message) {
        this.message = message;
        this.code = code;
    }

    static badRequest(err) {
        return new ApiError(400, err);
    }
}

module.exports = ApiError;