const db = require('../database');

const getDriversInTeamByTeamId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(404).json({error: 'parameter not valid.'}); 
    }else{
        const response = await db.query('SELECT id, team_id, driver_1_id, driver_2_id FROM drivers_in_teams WHERE team_id = $1',[req.params.id]);
        if (response.rows.length > 0 ){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(405).json({error: 'not found.'});
        }
    }
}

const createDriversInTeam = async (req, res) => {
    try{
        const {team_id, driver_1_id, driver_2_id} = req.body;
        const checkExistingTeam = await db.query('SELECT * FROM teams WHERE id = $1',[team_id]);
        const checkExistingDriver1 = await db.query('SELECT * FROM drivers WHERE id = $1',[driver_1_id]);
        const checkExistingDriver2 = await db.query('SELECT * FROM drivers WHERE id = $1',[driver_2_id]);
        
        if (checkExistingTeam.rowCount>0 && checkExistingDriver1.rowCount>0 && checkExistingDriver2.rowCount>0){
            const response = await db.query('INSERT INTO drivers_in_teams (team_id, driver_1_id, driver_2_id) VALUES ($1, $2, $3)', [
                team_id, 
                driver_1_id, 
                driver_2_id
            ]);
            res.status(201).json({success: 'true'});
        }else{
            res.status(404).json({
                error: 'invalid parameters',
                description: 'One of the parameters does not exists.', 
            });
        }

    }catch(err){
        res.status(405).json({
            error: 'creation failed',
        }); 
    }
}

const updateDriversInTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(404).json({
                error: 'invalid parameter',
                description: 'The team does not exists.'
            }); 
        }else{
            const {driver_1_id, driver_2_id} = req.body;
            const checkExistingDriver1 = await db.query('SELECT * FROM drivers WHERE id = $1',[driver_1_id]);
            const checkExistingDriver2 = await db.query('SELECT * FROM drivers WHERE id = $1',[driver_2_id]);
            
            if (checkExistingDriver1.rowCount>0 && checkExistingDriver2.rowCount>0){
                const response = await db.query('UPDATE drivers_in_teams SET driver_1_id = $1, driver_2_id = $2 WHERE id = $3', [
                    driver_1_id, 
                    driver_2_id, 
                    req.params.id
                ]);
                res.status(200).json({success: 'true'});
            }else{
                res.status(404).json({
                    error: 'invalid parameters',
                    description: 'One of the parameters does not exists.', 
                });
            }
        }
    }catch(err){
        res.status(405).json({
            error: 'update failed',
            description: err.message, 
        }); 
    }
}

const deleteDriversInTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(404).json({error: 'parameter not valid.'}); 
        }else{
            const response = await db.query('DELETE FROM drivers_in_teams WHERE id = $1',[req.params.id]);
            res.status(200).json({success: 'true'});
        }
    }catch(err){
        res.status(405).json({
            error: 'delete failed',
            description: err.message, 
        }); 
    }
}

module.exports = {
    getDriversInTeamByTeamId,
    createDriversInTeam,
    deleteDriversInTeam,
    updateDriversInTeam
}