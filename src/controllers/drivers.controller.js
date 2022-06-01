const db = require('../database');

const getDrivers = async (req, res) => {
    const response = await db.query('SELECT id, name, age, nationality, points, scuderia, number, value FROM DRIVERS');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getDriversOrderedByPoints = async (req, res) => {
    const response = await db.query('SELECT id, name, age, nationality, points, scuderia, number, value FROM DRIVERS ORDER BY points DESC');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getDriverById = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(400).json({error: 'invalid parameter.'}); 
    }else{
        const checkExistsDriver = await db.query('SELECT * FROM DRIVERS WHERE id = $1', [req.params.id]);
        if (checkExistsDriver.rowCount > 0){
            const response = await db.query('SELECT * FROM DRIVERS WHERE id = $1', [req.params.id]);

            if (response.rows.length > 0 ){
                res.status(200).json(response.rows[0]);
            }else {
                res.status(404).json({error: 'not found.'});
            }
        }else{
            res.status(400).json({error: 'invalid parameter.'}); 
        }
    }
}
module.exports = {
    getDrivers,
    getDriversOrderedByPoints,
    getDriverById
}