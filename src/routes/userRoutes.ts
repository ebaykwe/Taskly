import { Router } from 'express';
import UserController from '../controllers/userController';
import authMiddleware from '../middlewares/authMiddleware';
import { validateRequest } from '../middlewares/validateRequest';
import { updateUserSchema, inviteUserSchema } from '../validators/userValidator';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management routes
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get user information
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved successfully
 *       401:
 *         description: Unauthorized access
 */
router.get('/', authMiddleware, UserController.getUser);

/**
 * @swagger
 * /users:
 *   put:
 *     summary: Update user information
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 */
router.put('/', authMiddleware, validateRequest(updateUserSchema), UserController.updateUser);

/**
 * @swagger
 * /users/invite:
 *   post:
 *     summary: Invite a user to the platform
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InviteUser'
 *     responses:
 *       201:
 *         description: User invited successfully
 *       400:
 *         description: Invalid input
 */
router.post('/invite', authMiddleware, validateRequest(inviteUserSchema), UserController.inviteUser);

export default router;
