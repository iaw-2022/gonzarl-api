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
        res.status(400).json({error: 'invalid parameter.'}); 
    }else{
        const checkExistsFinishes = await db.query ('SELECT * FROM RACES WHERE ID = $1', [req.params.id]);
        if (checkExistsFinishes.rowCount > 0) {
            const response = await db.query('SELECT id, race_id, driver_1_id, driver_2_id, driver_3_id, driver_4_id, driver_5_id, driver_6_id, driver_7_id, driver_8_id, driver_9_id, driver_10_id FROM FINISHES WHERE race_id = $1', [req.params.id]);
            if (response.rows.length > 0 ){
                const drivers = await db.query('SELECT id, name, scuderia FROM drivers WHERE id = $1 OR id = $2 OR id = $3 OR id = $4 OR id = $5 OR id = $6 OR id = $7 OR id = $8 OR id = $9 OR id = $10', 
                    [response.rows[0].driver_1_id,
                    response.rows[0].driver_2_id,
                    response.rows[0].driver_3_id,
                    response.rows[0].driver_4_id,
                    response.rows[0].driver_5_id,
                    response.rows[0].driver_6_id,
                    response.rows[0].driver_7_id,
                    response.rows[0].driver_8_id,
                    response.rows[0].driver_9_id,
                    response.rows[0].driver_10_id,]);
                res.status(200).json(drivers.rows);
            }else {
                res.status(404).json({error: 'not found.'});
            }
        }else{
            res.status(400).json({error: 'invalid parameter.'});
        }
    }
}

module.exports = {
    getFinishes,
    getFinishesByRaceId
} 