const express = require('express');
const router = express.Router();

const finishesController = require('../controllers/finishes.controller.js');

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
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               race_id:
 *                 type: integer
 *                 example: 1
 *               driver_1_id:
 *                 type: integer
 *                 example: 1
 *               driver_2_id:
 *                 type: integer
 *                 example: 2
 *               driver_3_id:
 *                 type: integer
 *                 example: 3
 *               driver_4_id:
 *                 type: integer
 *                 example: 4
 *               driver_5_id:
 *                 type: integer
 *                 example: 5
 *               driver_6_id:
 *                 type: integer
 *                 example: 6
 *               driver_7_id:
 *                 type: integer
 *                 example: 7
 *               driver_8_id:
 *                 type: integer
 *                 example: 8
 *               driver_9_id:
 *                 type: integer
 *                 example: 9
 *               driver_10_id:
 *                 type: integer
 *                 example: 10          
 *       '404':
 *         description: Not found
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: not found
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
 *            race_id:
 *              type: integer
 *              example: 1
 *            driver_1_id:
 *              type: integer
 *              example: 1
 *            driver_2_id:
 *              type: integer
 *              example: 2
 *            driver_3_id:
 *              type: integer
 *              example: 3
 *            driver_4_id:
 *              type: integer
 *              example: 4
 *            driver_5_id:
 *              type: integer
 *              example: 5
 *            driver_6_id:
 *              type: integer
 *              example: 6
 *            driver_7_id:
 *              type: integer
 *              example: 7
 *            driver_8_id:
 *              type: integer
 *              example: 8
 *            driver_9_id:
 *              type: integer
 *              example: 9
 *            driver_10_id:
 *              type: integer
 *              example: 10                 
 *      '400':
 *        description: Not found
 *        schema:
 *            type: object
 *            properties:
 *              error:
 *                type: string
 *                example: not found     
 *      '404':
 *        description: Invalid parameter
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: invalid parameter
 */
router.get('/:id',finishesController.getFinishesByRaceId);
module.exports = router;