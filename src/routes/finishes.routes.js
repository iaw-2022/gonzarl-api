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
 *         description: OK
 *       '404':
 *         description: Not found
 */
router.get('/', finishesController.getRaces);

/**
 * @swagger 
 * /finishes/{race_id}:
 *  get: 
 *    description: use to request a finish result for a race.
 *    tags:
 *      - Finishes
 *    parameters:
 *      - in: path
 *        name: id  
 *        schema: 
 *          type: integer
 *        required: true
 *        description: id of the race
 *    responses:
 *      '200':
 *        description: Successfull response
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id',finishesController.getFinishesByRaceId);
module.exports = router;