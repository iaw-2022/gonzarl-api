const express = require('express');
const router = express.Router();

const finishesController = require('../controllers/finishes.controller.js');

/**
 * @swagger
 * definitions:
 *   Finishes:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         example: 1
 *       race_id:
 *         type: string
 *         example: 1
 *       driver_1_id:
 *         type: string
 *         example: 1
 *       driver_2_id:
 *         type: string
 *         example: 2
 *       driver_3_id:
 *         type: string
 *         example: 3
 *       driver_4_id:
 *         type: string
 *         example: 4
 *       driver_5_id:
 *         type: string
 *         example: 5
 *       driver_6_id:
 *         type: string
 *         example: 6
 *       driver_7_id:
 *         type: string
 *         example: 7
 *       driver_8_id:
 *         type: string
 *         example: 8
 *       driver_9_id:
 *         type: string
 *         example: 9
 *       driver_10_id:
 *         type: string
 *         example: 10                 
 */

/**
 *  @swagger 
 * /finishes:
 *   get: 
 *     description: use to get all the finishes results for the races.
 *     tags:
 *       - Finishes
 *     responses:
 *       '200':
 *         description: Successful response
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#definitions/Finishes'
 *       '404':
 *         description: Not found
 */
router.get('/', finishesController.getFinishes);
/**
 * @swagger 
 * /finishes/{race_id}:
 *  get: 
 *    description: use to request a finish result for a race.
 *    tags:
 *      - Finishes
 *    parameters:
 *      - in: path
 *        name: race_id  
 *        schema: 
 *          type: string
 *        required: true
 *        description: id of the race
 *    responses:
 *      '200':
 *        description: Successful response
 *        schema:
 *          $ref: '#definitions/Finishes'   
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id',finishesController.getFinishesByRaceId);
module.exports = router;