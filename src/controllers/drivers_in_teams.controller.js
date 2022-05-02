const db = require('../database');

/* QUE RESPONDER EN EL JSON EN CASO DE EXITO DE CREATE - UPDATE - DELETE
    COMO VALIDAR QUE ESTAN FUNCIONANDO TANTO CREATE COMO UPDATE O DELETE?? ES 
    DECIR, VALIDAR QUE LO QUE VIENE EN BODY SEA LO QUE SE NECESITA
*/

const getDriversInTeams = async (req, res) => {
    const response = await db.query('SELECT * FROM drivers_in_teams');

    if (response.rows.length > 0 ){
        res.status(200).json(response.rows);
    }else {
        res.status(404).json({error: 'not found.'});
    }
}

const getDriversInTeamByTeamId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(400).json({error: 'parameter not valid.'}); 
    }else{
        const response = await db.query('SELECT * FROM drivers_in_teams WHERE team_id = $1',[req.params.id]);
        if (response.rows.length > 0 ){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(404).json({error: 'not found.'});
        }
    }
}

const createDriversInTeam = async (req, res) => {
    try{
        const {team_id, driver_1_id, driver_2_id} = req.body;
        const response = await db.query('INSERT INTO drivers_in_teams (team_id, driver_1_id, driver_2_id) VALUES ($1, $2, $3)', [
        team_id, 
        driver_1_id, 
        driver_2_id
        ]);
        res.status(201).json({success: 'true'});
    }catch(err){
        res.status(400).json({
            error: 'creation failed',
            description: err.message, 
        }); 
    }
    //como validar los errores posibles (body invalido)
}

const updateDriversInTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(400).json({error: 'parameter not valid.'}); 
        }else{
            const {team_id, driver_1_id, driver_2_id} = req.body;
            const response = await db.query('UPDATE drivers_in_teams SET team_id = $1, driver_1_id = $2, driver_2_id = $3 WHERE id = $4', [
                team_id, 
                driver_1_id, 
                driver_2_id, 
                req.params.id
            ]);
            res.status(200).json({success: 'true'});
        }
    }catch(err){
        res.status(400).json({
            error: 'update failed',
            description: err.message, 
        }); 
    }
}

const deleteDriversInTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(400).json({error: 'parameter not valid.'}); 
        }else{
            const response = await db.query('DELETE FROM drivers_in_teams WHERE id = $1',[req.params.id]);
            res.status(200).json({success: 'true'});
        }
    }catch(err){
        res.status(400).json({
            error: 'delete failed',
            description: err.message, 
        }); 
    }
}

module.exports = {
    getDriversInTeams,
    getDriversInTeamByTeamId,
    createDriversInTeam,
    deleteDriversInTeam,
    updateDriversInTeam
}