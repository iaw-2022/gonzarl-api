const { Pool } = require('pg');
const config = require('./config');

const dbConfig = {
    user: config.DB_USER,
    host: config.DB_HOST,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    ssl: { rejectUnauthorized: false }
}

const db = new Pool(dbConfig);

module.exports = db;