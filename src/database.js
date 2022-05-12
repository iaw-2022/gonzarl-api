const { Pool } = require('pg');
const config = require('./config');

const dbConfig = {
    port: config.PORT,
    database: config.DATABASE,
    host: config.DB_HOST,
    password: config.DB_PASSWORD,
    dbPort: config.DB_PORT,
    user: config.DB_USER,
    ssl: { rejectUnauthorized: false }
}

const db = new Pool(dbConfig);

module.exports = db;