const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const teamsController = require('../controllers/teams.controller.js');

router.get('/', teamsController.getTeams);
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
 *        description: Successfull response
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
 *         description: Successfull creation
 *       '400':
 *         description: Creation failed
 */
router.post('/', requiresAuth(), teamsController.createTeam);
/**
 *  @swagger 
 * /teams/{id}:
 *   post: 
 *     description: use to update a team name.
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
 *         description: successfull update
 *       '400':
 *         description: invalid team id
 *       '404':
 *         description: update failed
 */
router.post('/:id', requiresAuth(), teamsController.updateTeamName);
/**
 * @swagger 
 * /teams/{id}:
 *  delete: 
 *    description: use to delete a team.
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
 *      '404':
 *        description: Not found
 */
router.delete('/:id', requiresAuth(), teamsController.deleteTeam);

module.exports = router;
