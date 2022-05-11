const { Pool } = require('pg');
const config = require('./config');

const dbConfig = {
    database: config.DATABASE_URL
}

const db = new Pool(dbConfig);

module.exports = db;