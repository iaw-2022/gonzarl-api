const express = require('express');
const router = express.Router();

const racesController = require('../controllers/races.controller.js');

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

module.exports = router;