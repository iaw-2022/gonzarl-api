const express = require('express');
const router = express.Router();
const checkAuth = require('../auth');
const teamsController = require('../controllers/teams.controller.js');

/**
 * @swagger
 * components:
 *   schemas:
 *     Team:
 *       type: object
 *       properties: 
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Equipazoo
 *         budget:
 *           type: integer
 *           example: 100000
 *         points:
 *           type: integer
 *           example: 100
 *         user_id:
 *           type: integer
 *           example: 2
 */

/**
 * @swagger 
 * /teams/{user_id}:
 *  get: 
 *    description: use to request a user team.
 *    tags:
 *      - Teams
 *    parameters:
 *      - in: path
 *        name: user_id  
 *        schema: 
 *          type: integer
 *        required: true
 *        description: id of the user owner of the team
 *    responses:
 *      '200':
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#components/schemas/Team'
 *      '400':
 *        description: Invalid parameter
 *      '404':
 *        description: Not found
 */
router.get('/:id', teamsController.getTeamByUserId);
/**
 *  @swagger 
 * /teams:
 *   post: 
 *     description: use to create a team.
 *     security: 
 *       - bearerAuth: []
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: body
 *         name: team
 *         description: The team to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - user_id
 *           properties:
 *             name:
 *               type: string
 *             user_id:
 *               type: integer
 *     responses:
 *       '201':
 *         description: Successful creation
 *       '400':
 *         description: Invalid parameters
 *       '401':
 *        description: Invalid token.
 *       '404':
 *         description: Creation failed
 */
router.post('/', checkAuth, teamsController.createTeam);
/**
 *  @swagger 
 * /teams/{id}:
 *   put: 
 *     description: use to update a team name.
 *     security: 
 *       - bearerAuth: []
 *     tags:
 *       - Teams
 *     parameters:
 *       - in: path
 *         name: id  
 *         schema: 
 *           type: integer
 *         required: true
 *         description: id of the team
 *       - in: body
 *         name: team name
 *         schema:
 *           type: object
 *           required:
 *             - name
 *           properties:
 *             name:
 *               type: string
 *         description: the new name for the team.
 *     responses:
 *       '201':
 *         description: Successful update
 *       '400':
 *         description: Invalid parameters
 *       '401':
 *         description: Invalid token.
 *       '404':
 *         description: Update failed
 */
router.put('/:id', checkAuth, teamsController.updateTeamName);
/**
 * @swagger 
 * /teams/{id}:
 *  delete: 
 *    description: use to delete a team.
 *    security: 
 *      - bearerAuth: []
 *    tags:
 *      - Teams
 *    parameters:
 *      - in: path
 *        name: id  
 *        schema: 
 *          type: integer
 *        required: true
 *        description: id of the team
 *    responses:
 *      '200':
 *        description: Successfull response
 *      '400':
 *        description: Invalid parameter
 *      '401':
 *        description: Invalid token.
 *      '404':
 *        description: Not found
 */
router.delete('/:id', checkAuth, teamsController.deleteTeam);

module.exports = router;
