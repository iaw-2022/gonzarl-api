const express = require('express');
const router = express.Router();

const driversController = require('../controllers/drivers.controller.js');
/**
 * @swagger
 * definitions:
 *   Driver:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         example: 1
 *       name:
 *         type: string
 *         example: Juan Manuel Fangio
 *       age:
 *         type: string
 *         example: 25
 *       nationality:
 *         type: string
 *         example: Argentino
 *       points:
 *         type: integer
 *         example: 50
 *       scuderia:
 *         type: string
 *         example: Ferrari
 *       number: 
 *         type: string
 *         example: 66
 *       value:
 *         type: integer
 *         example: 100000
 *       path:
 *         type: string
 *         example: "http://img.com"
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
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#definitions/Driver'
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
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#definitions/Driver'
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
 *          type: string
 *        required: true
 *        description: id of the driver
 *    responses:
 *      '200':
 *        description: Successful response
 *        schema:
 *          $ref: '#definitions/Driver'
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id', driversController.getDriverById);

module.exports = router;
