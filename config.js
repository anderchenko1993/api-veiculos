const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
    }
}