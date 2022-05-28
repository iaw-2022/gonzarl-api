const db = require('../database');

const getTeamByUserId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(404).json({error: 'invalid parameter.'}); 
    }else{
        const response = await db.query('SELECT * FROM TEAMS WHERE user_id = $1',[req.params.id]);
        if (response.rows.length > 0 ){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(405).json({error: 'not found.'});
        }
    }
}

const createTeam = async (req, res) => {
    try{
        const {name, userId} = req.body;
        const checkExistsUser = await db.query('SELECT * FROM users WHERE id = $1',[userId]);
        if (checkExistsUser.rows>0){
            const response = await db.query('INSERT INTO teams (name, user_id) VALUES ($1, $2)', [name, userId]);
            res.status(201).json({success: 'true'});
        }else{
            res.status(404).json({
                error: 'invalid parameters', 
            }); 
        }
    }catch(err){
        res.status(405).json({
            error: 'creation failed'
        }); 
    }
}

const updateTeamName = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(404).json({error: 'parameter not valid.'}); 
        }else{
            const {name} = req.body;
            const response = await db.query(
                'UPDATE teams SET name = $1 WHERE id = $2', [name, req.params.id]);
            res.status(200).json({success: 'true'});
        }
    }catch(err){
        res.status(405).json({
            error: 'update failed',
            description: err.message, 
        }); 
    }
}

const deleteTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(404).json({error: 'parameter not valid.'}); 
        }else{
            const response = await db.query('DELETE FROM TEAMS WHERE id = $1',[req.params.id]);
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
    getTeamByUserId,
    createTeam,
    updateTeamName,
    deleteTeam
}