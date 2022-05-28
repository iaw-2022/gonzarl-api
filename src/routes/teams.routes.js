const express = require('express');
const router = express.Router();
const checkAuth = require('../auth');
const teamsController = require('../controllers/teams.controller.js');

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
 *      '404':
 *        description: Invalid parameter
 *      '405':
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
 *       '404':
 *         description: Invalid parameters
 *       '405':
 *         description: Creation failed
 */
router.post('/', checkAuth, teamsController.createTeam);
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
 *         description: Successfull update
 *       '404':
 *         description: Invalid parameters
 *       '405':
 *         description: Update failed
 */
router.put('/:id', checkAuth, teamsController.updateTeamName);
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
 *      '404':
 *        description: Invalid parameter
 *      '405':
 *        description: Not found
 */
router.delete('/:id', checkAuth, teamsController.deleteTeam);

module.exports = router;
