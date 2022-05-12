require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    DB_HOST: process.env.DB_HOST,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.PORT,
    DB_USER: process.env.DB_USER
}