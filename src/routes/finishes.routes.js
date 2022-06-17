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
 *       name:
 *         type: string
 *         example: Carlos Rapido
 *       scuderia:
 *         type: string
 *         example: Argentina Racing Team
 */

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
 *          type: array
 *          items:
 *            $ref: '#definitions/Finishes'   
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id',finishesController.getFinishesByRaceId);
module.exports = router;