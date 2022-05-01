const db = require('../database');

const getDriversInTeams = async (req, res) => {
    const response = await db.query('SELECT * FROM drivers_in_teams');
    res.status(200).json(response.rows);
}

const getDriversInTeamByTeamId = async (req, res) => {
    const response = await db.query('SELECT * FROM drivers_in_teams WHERE team_id = $1',[req.params.id]);
    res.status(200).json(response.rows);
}

const createDriversInTeam = async (req, res) => {
    const {team_id, driver_1_id, driver_2_id} = req.body;
    const response = await db.query('INSERT INTO drivers_in_teams (team_id, driver_1_id, driver_2_id) VALUES ($1, $2, $3)', [
        team_id, 
        driver_1_id, 
        driver_2_id
    ]);
    res.status(200).json(response.rows);
}

const updateDriversInTeam = async (req, res) => {
    const {team_id, driver_1_id, driver_2_id} = req.body;
    const response = await db.query('UPDATE drivers_in_teams SET team_id = $1, driver_1_id = $2, driver_2_id = $3 WHERE id = $4', [
        team_id, 
        driver_1_id, 
        driver_2_id, 
        req.params.id
    ]);
    res.status(200).json(response.rows);
}

const deleteDriversInTeam = async (req, res) => {
    const response = await db.query('DELETE FROM drivers_in_teams WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);
}

module.exports = {
    getDriversInTeams,
    getDriversInTeamByTeamId,
    createDriversInTeam,
    deleteDriversInTeam,
    updateDriversInTeam
}