const { Pool } = require('pg');
const config = require('./config');

const dbConfig = {
    database: config.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
}

const db = new Pool(dbConfig);

module.exports = db;