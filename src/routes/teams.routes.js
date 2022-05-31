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
 *        description: Successful response
 *        schema:
 *          type: object
 *          properties: 
 *            id:
 *              type: integer
 *              example: 1
 *            name:
 *              type: string
 *              example: Equipazoo
 *            budget:
 *              type: integer
 *              example: 100000
 *            points:
 *              type: integer
 *              example: 100
 *            user_id:
 *              type: integer
 *              example: 2
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
 *         schema: 
 *           type: object
 *           properties:
 *             success: 
 *               type: string
 *               example: true
 *       '400':
 *         description: Creation failed
 *         schema: 
 *           type: object
 *           properties:
 *             error: 
 *               type: string
 *               example: creation failed
 *       '401':
 *        description: Invalid token.
 *        schema: 
 *          type: object
 *          properties:
 *            error: 
 *              type: string
 *              example: invalid token
 *       '404':
 *         description: Invalid parameters
 *         schema: 
 *           type: object
 *           properties:
 *             error: 
 *               type: string
 *               example: invalid parameters
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
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               type: string
 *               example: true
 *       '400':
 *         description: Update failed
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: update failed
 *       '401':
 *        description: Invalid token.
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: invalid token
 *       '404':
 *         description: Invalid parameters
 *         schema:
 *           type: object
 *           properties:
 *             error:
 *               type: string
 *               example: invalid parameters
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
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: string
 *              example: true
 *      '400':
 *        description: Not found
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: not found
 *      '401':
 *        description: Invalid token.
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: invalid token
 *      '404':
 *        description: Invalid parameter
 *        schema:
 *          type: object
 *          properties:
 *            error:
 *              type: string
 *              example: invalid parameter
 */
router.delete('/:id', checkAuth, teamsController.deleteTeam);

module.exports = router;
