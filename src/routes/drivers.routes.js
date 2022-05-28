const express = require('express');
const router = express.Router();

const driversController = require('../controllers/drivers.controller.js');

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
 *       '404':
 *         description: Not found
 */
router.get('/', driversController.getDrivers);
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
 *        description: Successfull response
 *      '404':
 *        description: Invalid parameter
 *      '405':
 *        description: Not found
 */
router.get('/:id', driversController.getDriverById);

module.exports = router;
