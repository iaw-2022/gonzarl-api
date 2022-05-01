const db = require('../database');

const getTeams = async (req, res) => {
    const response = await db.query('SELECT * FROM TEAMS');
    res.status(200).json(response.rows);
}

const getTeamById = async (req, res) => {
    const response = await db.query('SELECT * FROM TEAMS WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);
}

const createTeam = async (req, res) => {
    const {name, user_id} = req.body;
    const response = await db.query('INSERT INTO teams (name, user_id) VALUES ($1, $2)', [name, user_id]);
    res.status(200).json(response.rows);//al insertar el response es [], preguntar una alternativa o mensaje
}

const deleteTeam = async (req, res) => {
    const response = await db.query('DELETE FROM TEAMS WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);//al insertar el response es [], preguntar una alternativa o mensaje
}

module.exports = {
    getTeams,
    getTeamById,
    createTeam,
    deleteTeam
}