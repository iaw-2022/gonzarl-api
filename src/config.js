require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PASSWORD: process.env.DB_PASSWORD,
    SERVER: process.env.SERVER,

    ISSUER_BASE_URL: process.env.ISSUER_BASE_URL,
    CLIENT_ID: process.env.CLIENT_ID,
    BASE_URL: process.env.BASE_URL,
    SECRET: process.env.SECRET
}