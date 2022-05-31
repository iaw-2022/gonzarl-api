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
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: Juan Manuel Fangio
 *               age:
 *                 type: integer
 *                 example: 25
 *               nationality:
 *                 type: string
 *                 example: Argentino
 *               points:
 *                 type: string
 *                 example: 50
 *               scuderia:
 *                 type: string
 *                 example: Ferrari
 *               number: 
 *                 type: integer
 *                 example: 66
 *               value:
 *                 type: integer
 *                 example: 100000
 *       '404':
 *         description: Not found
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
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
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               name:
 *                 type: string
 *                 example: Juan Manuel Fangio
 *               age:
 *                 type: integer
 *                 example: 25
 *               nationality:
 *                 type: string
 *                 example: Argentino
 *               points:
 *                 type: string
 *                 example: 50
 *               scuderia:
 *                 type: string
 *                 example: Ferrari
 *               number: 
 *                 type: integer
 *                 example: 66
 *               value:
 *                 type: integer
 *                 example: 100000
 *       '404':
 *         description: Not found
 *         schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
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
 *        schema:
 *            type: object
 *            properties:
 *              id:
 *                type: integer
 *                example: 1
 *              name:
 *                type: string
 *                example: Juan Manuel Fangio
 *              age:
 *                type: integer
 *                example: 25
 *              nationality:
 *                type: string
 *                example: Argentino
 *              points:
 *                type: string
 *                example: 50
 *              scuderia:
 *                type: string
 *                example: Ferrari
 *              number: 
 *                type: integer
 *                example: 66
 *              value:
 *                type: integer
 *                example: 100000
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
router.get('/:id', driversController.getDriverById);

module.exports = router;
