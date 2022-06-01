const express = require('express');
const router = express.Router();
const checkAuth = require('../auth');
const driversInTeamsController = require('../controllers/drivers_in_teams.controller.js');

/**
 * @swagger
 * components:
 *   schemas:
 *     DriversInTeams:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        team_id:
 *          type: integer
 *          example: 1
 *        driver_1_id:
 *          type: integer
 *          example: 1
 *        driver_2_id:
 *          type: integer
 *          example: 2
 */

/**
 * @swagger 
 * /drivers_in_teams/{id}:
 *  get: 
 *    description: use to request the drivers in a team.
 *    tags:
 *      - DriversInTeams
 *    parameters:
 *      - in: path
 *        name: id  
 *        schema: 
 *          type: integer
 *        required: true
 *        description: id of the drivers_in_team
 *    responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/DriversInTeams'
 *      '404':
 *        description: Not found
 */
router.get('/:id', driversInTeamsController.getDriversInTeamByTeamId);
/**
 * @swagger 
 * /drivers_in_teams:
 *  post: 
 *    description: use to assign the drivers for a team.
 *    security: 
 *      - bearerAuth: []
 *    tags:
 *      - DriversInTeams
 *    parameters:
 *      - in: body
 *        name: drivers_in_team
 *        description: The drivers to assign to a team.  
 *        schema: 
 *          type: object
 *          required: 
 *            - team_id
 *            - driver_1_id
 *            - driver_2_id
 *          properties:
 *            team_id:
 *              type: integer
 *            driver_1_id:
 *              type: integer
 *            driver_2_id:
 *              type: integer
 *    responses:
 *      '201':
 *        description: Successful creation
 *      '400':
 *        description: Invalid parameters
 *      '401':
 *        description: Invalid token.
 *      '404':
 *        description: Creation failed.
 */
router.post('/', checkAuth, driversInTeamsController.createDriversInTeam);
/**
 * @swagger 
 * /drivers_in_teams/{id}:
 *  put: 
 *    description: use to update the drivers for a team.
 *    security: 
 *      - bearerAuth: []
 *    tags:
 *      - DriversInTeams
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: id of the drivers in the team
 *      - in: body
 *        name: drivers_in_team
 *        description: The drivers to assign to a team.  
 *        schema: 
 *          type: object
 *          required: 
 *            - driver_1_id
 *            - driver_2_id
 *          properties:
 *            driver_1_id:
 *              type: integer
 *            driver_2_id:
 *              type: integer
 *    responses:
 *      '200':
 *        description: Successful update
 *      '400':
 *        description: Invalid parameters
 *      '401':
 *        description: Invalid token.
 *      '404':
 *        description: Update failed
 */
router.put('/:id', checkAuth, driversInTeamsController.updateDriversInTeam);
/**
 * @swagger 
 * /drivers_in_teams/{id}:
 *  delete: 
 *    description: use to delete the drivers in a team.
 *    security: 
 *      - bearerAuth: []
 *    tags:
 *      - DriversInTeams
 *    parameters:
 *      - in: path
 *        name: id  
 *        schema: 
 *          type: integer
 *        required: true
 *        description: id of the drivers_in_team
 *    responses:
 *      '200':
 *        description: Successful deletion
 *      '400':
 *        description: Invalid parameter
 *      '401':
 *        description: Invalid token.
 *      '404':
 *        description: delete failed
 */
router.delete('/:id', checkAuth, driversInTeamsController.deleteDriversInTeam);

module.exports = router;
