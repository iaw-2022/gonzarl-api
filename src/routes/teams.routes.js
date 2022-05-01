const express = require('express');
const router = express.Router();

const teamsController = require('../controllers/teams.controller.js');

router.get('/', teamsController.getTeams);
router.get('/:id', teamsController.getTeamById);
router.post('/', teamsController.createTeam);
router.delete('/:id', teamsController.deleteTeam);

module.exports = router;
