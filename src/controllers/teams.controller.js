const { response } = require('express');
const db = require('../database');
const getUserInfoFromToken = require('../utils/authInfo').getUserInfoFromToken;

const getBestTeams = async(req, res) => {
    const response = await db.query('SELECT teams.id, teams.name AS team_name, teams.points, users.name AS team_owner FROM teams JOIN users on teams.user_id = users.id ORDER BY teams.points DESC');
    if (response.rowCount<15){
        res.status(200).json(response.rows);
    }else{
        res.status(200).json(response.rows.slice(0,15))
    }
}

const getTeam = async (req, res) => {
    try{
        const user_info = await getUserInfoFromToken(req);
        await findUserId(user_info).then(
            async (user_id) => {
                const response = await db.query('SELECT id, name, budget, points, user_id FROM TEAMS WHERE user_id = $1',[user_id]);
                if (response.rows.length > 0 ){
                    res.status(200).json(response.rows[0]);
                }else {
                    res.status(404).json({error: 'not found.'});
                }
            }
        )
    }catch(err){
        res.status(404).json({
            error: err.message
        }); 
    }
}

const getTeamById = async(req, res) => {
    if (isNaN(req.params.id)){
        res.status(400).json({error: 'invalid parameter.'}); 
    }else{
        const response = await db.query('SELECT teams.id, teams.name, teams.points, users.name AS owner FROM teams INNER JOIN users ON teams.user_id = users.id WHERE teams.id = $1',[req.params.id]);
        if (response.rowCount>0){
            res.status(200).json(response.rows[0]);
        }else {
            res.status(404).json({error: 'not found.'});
        }
    }
}

const createTeam = async (req, res) => {
    try{
        const user_info = await getUserInfoFromToken(req);
        await findUserId(user_info).then(
            (user_id) => {
                const {name} = req.body;
        
                const response = db.query('INSERT INTO teams (name, user_id) VALUES ($1, $2)',[
                    name, 
                    user_id
                ]);
                res.status(201).json({success: 'true'});
            }
        )
    }catch(err){
        res.status(404).json({
            error: err.message
        }); 
    }
}

async function findUserId(user_info){
    const user = await db.query('SELECT id FROM users WHERE email = $1', [user_info.email]).then(
        (user) => {
            if (user.rowCount > 0){
                return user.rows[0].id
            }else{
                return db.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3) returning id', [
                    user_info.name, user_info.email, "auth0"
                ]).then((user) => user.rows[0].id)
            }
        }
    )
    return user
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
    getBestTeams,
    getTeam,
    getTeamById,
    createTeam,
    updateTeamName,
    deleteTeam
}