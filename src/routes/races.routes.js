const express = require('express');
const router = express.Router();

const racesController = require('../controllers/races.controller');

/**
 *  @swagger 
 * /races:
 *   get: 
 *     description: use to get all races.
 *     tags:
 *       - Races
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Not found
 */
router.get('/', racesController.getRaces);
/**
 *  @swagger
 * /races/next:
 *   get:
 *     description: use to get the next race given the current date.
 *     tags:
 *       - Races
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Not found
 */
router.get('/next', racesController.getNextRace);

module.exports = router;