require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PASSWORD: process.env.DB_PASSWORD,
    SERVER: process.env.SERVER,

    AUTH_JWK_URI: process.env.AUTH_JWK_URI,
    AUTH_AUDIENCE: process.env.AUTH_AUDIENCE,
    AUTH_ISSUER: process.env.AUTH_ISSUER,
    AUTH_ALGORITHM: process.env.AUTH_ALGORITHM,
}