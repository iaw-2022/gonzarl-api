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
module.exports = router;
