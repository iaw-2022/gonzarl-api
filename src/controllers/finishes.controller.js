const db = require('../database');

const getFinishes = async (req, res) => {
    const response = await db.query('SELECT * FROM FINISHES');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getFinishesByRaceId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(400).json({error: 'invalid parameter.'}); 
    }else{
        const response = await db.query('SELECT * FROM FINISHES WHERE race_id = $1', [req.params.id]);
    
        if (response.rows.length > 0 ){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(404).json({error: 'not found.'});
        }
    }
}

module.exports = {
    getFinishes,
    getFinishesByRaceId
} 