require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_ENVIRONMENT: process.env.DATABASE_ENVIRONMENT,    
}