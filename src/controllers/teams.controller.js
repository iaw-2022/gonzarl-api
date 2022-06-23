const db = require('../database');
const getUserInfoFromToken = require('../utils/authInfo').getUserInfoFromToken;

const getTeamByUserId = async (req, res) => {
    if (isNaN([req.params.id])){
        res.status(400).json({error: 'invalid parameter.'}); 
    }else{
        const response = await db.query('SELECT id, name, budget, points, user_id FROM TEAMS WHERE user_id = $1',[req.params.id]);
        if (response.rows.length > 0 ){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(404).json({error: 'not found.'});
        }
    }
}

const createTeam = async (req, res) => {
    try{
        const user_info = await getUserInfoFromToken(req);
        const user_id = await findUserId(user_info);
        const {name} = req.body;
        
        const response = await db.query('INSERT INTO teams (name, user_id) VALUES ($1, $2)',[
            name, 
            user_id
        ]);
        res.status(201).json({success: 'true'});
        
    }catch(err){
        res.status(404).json({
            error: 'creation failed'
        }); 
    }
}

async function findUserId(user_info){
    const user = await db.query('SELECT id FROM users WHERE email = $1', [user_info.email]).then(
        async (user) => {
            if (user.rowCount > 0){
                return user.rows[0].id
            }else{
                return await db.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3) returning id', [
                    user_info.name, user_info.email, user_info.name
                ])
            }
        }
    )
}

const updateTeamName = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(400).json({error: 'parameter not valid.'}); 
        }else{
            const checkExistsTeam = await db.query('SELECT * FROM TEAMS WHERE id = $1', [req.params.id]);
            if (checkExistsTeam.rowCount > 0){
                const {name} = req.body;
                const response = await db.query(
                    'UPDATE teams SET name = $1 WHERE id = $2', [name, req.params.id]);
                res.status(200).json({success: 'true'});
            } else{
                res.status(400).json({error: 'parameter not valid.'});   
            }
        }
    }catch(err){
        res.status(404).json({
            error: 'update failed',
        }); 
    }
}

const deleteTeam = async (req, res) => {
    try{
        if (isNaN([req.params.id])){
            res.status(400).json({error: 'parameter not valid.'}); 
        }else{
            const checkExistsTeam = await db.query('SELECT * FROM TEAMS WHERE id = $1', [req.params.id]);
            if (checkExistsTeam.rowCount > 0){
                const response = await db.query('DELETE FROM TEAMS WHERE id = $1',[req.params.id]);
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
    getTeamByUserId,
    createTeam,
    updateTeamName,
    deleteTeam
}