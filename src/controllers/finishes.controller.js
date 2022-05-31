const db = require('../database');

const getFinishes = async (req, res) => {
    const response = await db.query('SELECT id, race_id, driver_1_id, driver_2_id, driver_3_id, driver_4_id, driver_5_id, driver_6_id, driver_7_id, driver_8_id, driver_9_id, driver_10_id FROM FINISHES');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getFinishesByRaceId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(404).json({error: 'invalid parameter.'}); 
    }else{
        const checkExistsFinishes = await db.query ('SELECT * FROM RACES WHERE ID = $1', [req.params.id]);
        if (checkExistsFinishes.rowCount > 0) {
            const response = await db.query('SELECT id, race_id, driver_1_id, driver_2_id, driver_3_id, driver_4_id, driver_5_id, driver_6_id, driver_7_id, driver_8_id, driver_9_id, driver_10_id FROM FINISHES WHERE race_id = $1', [req.params.id]);
    
            if (response.rows.length > 0 ){
                res.status(200).json(response.rows[0]);
            }else {
                res.status(400).json({error: 'not found.'});
            }
        }else{
            res.status(404).json({error: 'invalid parameter.'});
        }
    }
}

module.exports = {
    getFinishes,
    getFinishesByRaceId
} 