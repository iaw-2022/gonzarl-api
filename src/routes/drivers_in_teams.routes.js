const express = require('express');
const router = express.Router();

const driversInTeamsController = require('../controllers/drivers_in_teams.controller.js');

router.get('/', driversInTeamsController.getDriversInTeams);
router.get('/:id', driversInTeamsController.getDriversInTeamByTeamId);
router.post('/', driversInTeamsController.createDriversInTeam);
router.put('/:id',driversInTeamsController.updateDriversInTeam);
router.delete('/:id',driversInTeamsController.deleteDriversInTeam);

module.exports = router;
