const db = require('../database');

const getRaces = async (req, res) => {
    const response = await db.query('SELECT id, city, country, country_code, date, style FROM RACES');
    
    if (response.rows.length > 0 ){
        for(let i = 0; i<response.rows.length; i++){
            if (response.rows[i].date !=null){
                response.rows[i].date = response.rows[i].date.toLocaleDateString('en-CA')
            }
        }
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getNextRace = async (req, res) => {
    const response = await db.query('SELECT id, city, country, country_code, date, style FROM RACES WHERE DATE > CURRENT_DATE');
    
    if (response.rows.length > 0 ){
        response.rows[0].date = response.rows[0].date.toLocaleDateString('en-CA')
        res.status(200).json(response.rows[0]);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getRaceById = async(req, res) => {
    if (isNaN([req.params.id])){
        res.status(404).json({error: 'invalid parameter.'}); 
    }else{
        const response = await db.query('SELECT id, city, country, country_code, date, style FROM RACES WHERE id = $1',[req.params.id]);
        if (response.rows.length > 0 ){
            if (response.rows[0].date !=null){
                response.rows[0].date = response.rows[0].date.toLocaleDateString('en-CA')
            }
            res.status(200).json(response.rows[0]);
        }else {
            res.status(400).json({error: 'not found.'});
        }
    }
}

module.exports = {
    getRaces,
    getNextRace,
    getRaceById
}