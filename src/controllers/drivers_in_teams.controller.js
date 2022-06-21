const db = require('../database');

const getDriversInTeamByTeamId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(404).json({error: 'parameter not valid.'}); 
    }else{
        const checkExistTeam = await db.query('SELECT * FROM teams WHERE id = $1',[req.params.id]);
        if (checkExistTeam.rowCount > 0){
            const response = await db.query('SELECT id, team_id, driver_1_id, driver_2_id FROM drivers_in_teams WHERE team_id = $1',[req.params.id]);
            if (response.rows.length > 0 ){
                const driver1 = response.rows[0].driver_1_id;
                const driver2 = response.rows[0].driver_2_id;
                const drivers = await db.query('SELECT id, name, value FROM drivers WHERE id = $1 OR id = $2',[driver1, driver2]);
                for (let i = 0; i<drivers.rows.length;i++){
                    const image = await db.query('SELECT path FROM driver_images WHERE driver_id = $1', [drivers.rows[i].id]);
                    if (image.rowCount > 0){
                        drivers.rows[i].path = image.rows[0].path
                    }else{
                        drivers.rows[i].path = ""
                    }
                }
                res.status(200).json(drivers.rows);
            }else {
                res.status(404).json({error: 'not found.'});
            }
        }else{
            res.status(404).json({error: 'parameter not valid.'});
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

            const budget = checkExistingDriver1.rows[0].value + checkExistingDriver2.rows[0].value;
            const updateBudget = await db.query('UPDATE teams SET budget = $1 WHERE id = $2', [budget, team_id])
            res.status(201).json({success: 'true'});
        }else{
            res.status(400).json({
                error: 'invalid parameters',
            });
        }

    }catch(err){
        res.status(404).json({
            error: 'creation failed',
        }); 
    }
}

const updateDriversInTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(400).json({
                error: 'invalid parameter',
            }); 
        }else{
            const checkExistsTeam = await db.query('SELECT * FROM teams WHERE id = $1', [req.params.id]);
            const {driver_1_id, driver_2_id} = req.body;
            const checkExistingDriver1 = await db.query('SELECT * FROM drivers WHERE id = $1',[driver_1_id]);
            const checkExistingDriver2 = await db.query('SELECT * FROM drivers WHERE id = $1',[driver_2_id]);
            
            if (checkExistsTeam.rowCount>0 && checkExistingDriver1.rowCount>0 && checkExistingDriver2.rowCount>0){
                const response = await db.query('UPDATE drivers_in_teams SET driver_1_id = $1, driver_2_id = $2 WHERE team_id = $3', [
                    driver_1_id, 
                    driver_2_id, 
                    req.params.id
                ]);

                const budget = checkExistingDriver1.rows[0].value + checkExistingDriver2.rows[0].value;
                const updateBudget = await db.query('UPDATE teams SET budget = $1 WHERE id = $2', [budget, req.params.id])

                res.status(200).json({success: 'true'});
            }else{
                res.status(400).json({
                    error: 'invalid parameters',
                });
            }
        }
    }catch(err){
        res.status(404).json({
            error: 'update failed',
        }); 
    }
}

const deleteDriversInTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(400).json({error: 'parameter not valid.'}); 
        }else{
            const checkExistsTeam = await db.query('SELECT * FROM teams WHERE id = $1', [req.params.id]);
            if (checkExistsTeam.rowCount>0){
                const response = await db.query('DELETE FROM drivers_in_teams WHERE id = $1',[req.params.id]);
                res.status(200).json({success: 'true'});
            }else{
                res.status(400).json({error: 'parameter not valid.'}); 
            }
        }
    }catch(err){
        res.status(404).json({
            error: 'delete failed',
        }); 
    }
}

module.exports = {
    getDriversInTeamByTeamId,
    createDriversInTeam,
    deleteDriversInTeam,
    updateDriversInTeam
}