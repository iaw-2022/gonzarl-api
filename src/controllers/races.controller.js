const db = require('../database');

const getRaces = async (req, res) => {
    const response = await db.query('SELECT id, city, country, country, country_code, date, style FROM RACES');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getNextRace = async (req, res) => {
    const response = await db.query('SELECT id, city, country, country, country_code, date, style FROM RACES WHERE DATE > CURRENT_DATE');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows[0]);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

module.exports = {
    getRaces,
    getNextRace,
}