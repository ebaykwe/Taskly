import { Router } from 'express';
import TaskController from '../controllers/taskController';
import { createTaskSchema } from '../validators/taskValidator';
import { validateRequest } from '../middlewares/validateRequest';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management routes
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTask'
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', authMiddleware, validateRequest(createTaskSchema), TaskController.createTask);

/**
 * @swagger
 * /tasks/{boardId}:
 *   get:
 *     summary: Get all tasks for a specific board
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the board
 *     responses:
 *       200:
 *         description: List of tasks retrieved successfully
 *       401:
 *         description: Unauthorized access
 */
router.get('/:boardId', authMiddleware, TaskController.getTasks);

export default router;
