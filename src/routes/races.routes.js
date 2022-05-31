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
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties: 
 *               id:
 *                 type: integer
 *                 example: 1
 *               city:
 *                 type: string
 *                 example: Bahia blanca
 *               country:
 *                 type: string
 *                 example: Argentina
 *               country_code:
 *                 type: string
 *                 example: AR
 *               date:
 *                 type: date
 *                 pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *                 example: "2019-05-17"
 *               style:
 *                 type: string
 *                 example: Callejero
 *       '404':
 *         description: Not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: not found
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
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 1
 *             city:
 *               type: string
 *               example: Bahia blanca
 *             country:
 *               type: string
 *               example: Argentina
 *             country_code:
 *               type: string
 *               example: AR
 *             date:
 *               type: date
 *               pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *               example: "2019-05-17"
 *             style:
 *               type: string
 *               example: Callejero
 *       '404':
 *         description: Not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: not found
 */
router.get('/next', racesController.getNextRace);

module.exports = router;