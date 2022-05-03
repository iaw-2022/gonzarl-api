const express = require('express');
const router = express.Router();

const teamsController = require('../controllers/teams.controller.js');

router.get('/', teamsController.getTeams);
/**
 * @swagger 
 * /teams/{id}:
 *  get: 
 *    description: use to request a team.
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
router.get('/:id', teamsController.getTeamById);
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
router.post('/', teamsController.createTeam);
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
router.delete('/:id', teamsController.deleteTeam);

module.exports = router;
