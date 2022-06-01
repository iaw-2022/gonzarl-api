const express = require('express');
const router = express.Router();

const driversController = require('../controllers/drivers.controller.js');
/**
 * @swagger
 * components:
 *   schemas:
 *     Driver:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Juan Manuel Fangio
 *         age:
 *           type: integer
 *           example: 25
 *         nationality:
 *           type: string
 *           example: Argentino
 *         points:
 *           type: string
 *           example: 50
 *         scuderia:
 *           type: string
 *           example: Ferrari
 *         number: 
 *           type: integer
 *           example: 66
 *         value:
 *           type: integer
 *           example: 100000
 */

/**
 * @swagger
 * /drivers:
 *   get:
 *     description: Use to request all drivers.
 *     tags: 
 *       - Drivers
 *     responses:
 *       '200':
 *         description: Sucessful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Driver'
 *       '404':
 *         description: Not found
 */
router.get('/', driversController.getDrivers);
/**
 * @swagger
 * /drivers/points:
 *   get:
 *     description: Use to request all drivers ordered by championship points.
 *     tags: 
 *       - Drivers
 *     responses:
 *       '200':
 *         description: Sucessful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schemas/Driver'
 *       '404':
 *         description: Not found
 */
router.get('/points',driversController.getDriversOrderedByPoints);
/**
 * @swagger 
 * /drivers/{driver_id}:
 *  get: 
 *    description: use to request a driver.
 *    tags:
 *      - Drivers
 *    parameters:
 *      - in: path
 *        name: driver_id  
 *        schema: 
 *          type: integer
 *        required: true
 *        description: id of the driver
 *    responses:
 *      '200':
 *        description: Successful response
 *        content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Driver'
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id', driversController.getDriverById);

module.exports = router;
