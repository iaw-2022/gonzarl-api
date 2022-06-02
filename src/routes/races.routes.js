const express = require('express');
const router = express.Router();

const racesController = require('../controllers/races.controller');

/**
 * @swagger
 * definitions:
 *   Race:
 *     type: object
 *     properties: 
 *       id:
 *         type: string
 *         example: 1
 *       city:
 *         type: string
 *         example: Bahia blanca
 *       country:
 *         type: string
 *         example: Argentina
 *       country_code:
 *         type: string
 *         example: AR
 *       date:
 *         type: date
 *         pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *         example: "2019-05-17"
 *       style:
 *         type: string
 *         example: Callejero
 *       path:
 *         type: string
 *         example: "http://img.com"
 */

/**
 *  @swagger 
 * /races:
 *   get: 
 *     description: use to get all races.
 *     tags:
 *       - Races
 *     responses:
 *       '200':
 *         description: Successful response
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#definitions/Race'
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
 *         description: Successful response
 *         schema:
 *           $ref: '#definitions/Race'
 *       '404':
 *         description: Not found
 */
router.get('/next', racesController.getNextRace);
/**
 * @swagger 
 * /races/{id}:
 *  get: 
 *    description: use to request a race.
 *    tags:
 *      - Races
 *    parameters:
 *      - in: path
 *        name: id  
 *        schema: 
 *          type: string
 *        required: true
 *        description: id of the race
 *    responses:
 *      '200':
 *        description: Successful response
 *        schema:
 *          $ref: '#definitions/Race'        
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id', racesController.getRaceById);
module.exports = router;