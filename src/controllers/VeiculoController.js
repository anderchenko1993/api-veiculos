module.exports = {
    async index(req, res) {
        return res.json("index");
    },

    async show(req, res) {
        return res.json("show");
    },

    async store(req, res) {
        return res.json("store");
    },

    async update(req, res) {
        return res.json("update");
    },

    async destroy(req, res) {
        return res.json("destroy");
    }
}
    