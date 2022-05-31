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
 *         description: Successful response
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
 *         description: Successful response
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
 *          type: integer
 *        required: true
 *        description: id of the race
 *    responses:
 *      '200':
 *        description: Successful response
 *        schema:
 *          type: object
 *          properties: 
 *            id:
 *              type: integer
 *              example: 1
 *            city:
 *              type: string
 *              example: Bahia Blanca
 *            country:
 *              type: string
 *              example: Argentina
 *            country_code:
 *              type: string
 *              example: AR
 *            date:
 *              type: date
 *              pattern: /([0-9]{4})-(?:[0-9]{2})-([0-9]{2})/
 *              example: "2019-05-17"
 *            style:
 *              type: string
 *              example: Callejero
 *      '400':
 *        description: Not found
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
 *      '404':
 *        description: Invalid parameter
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: invalid parameter
 */
router.get('/:id', racesController.getRaceById);
module.exports = router;