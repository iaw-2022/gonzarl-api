const db = require('../database');

const getTeams = async (req, res) => {
    const response = await db.query('SELECT * FROM TEAMS');
    
    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getTeamById = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(400).json({error: 'parameter not valid.'}); 
    }else{
        const response = await db.query('SELECT * FROM TEAMS WHERE id = $1',[req.params.id]);
        if (response.rows.length > 0 ){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(404).json({error: 'not found.'});
        }
    }
}

const createTeam = async (req, res) => {
    const {name, user_id} = req.body;
    const response = await db.query('INSERT INTO teams (name, user_id) VALUES ($1, $2)', [name, user_id]);
    res.status(200).json(response.rows);
}

const deleteTeam = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(400).json({error: 'parameter not valid.'}); 
    }else{
        const response = await db.query('DELETE FROM TEAMS WHERE id = $1',[req.params.id]);
        res.status(200).json(response.rows);
    }
}

module.exports = {
    getTeams,
    getTeamById,
    createTeam,
    deleteTeam
}