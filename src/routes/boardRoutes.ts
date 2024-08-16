import { Router } from 'express';
import BoardController from '../controllers/boardController';
import authMiddleware from '../middlewares/authMiddleware';
import { createBoardSchema } from '../validators/boardValidator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Boards
 *   description: Board management routes
 */

/**
 * @swagger
 * /boards:
 *   post:
 *     summary: Create a new board
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateBoard'
 *     responses:
 *       201:
 *         description: Board created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', authMiddleware, validateRequest(createBoardSchema), BoardController.createBoard);

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: Get all boards
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of boards retrieved successfully
 *       401:
 *         description: Unauthorized access
 */
router.get('/', authMiddleware, BoardController.getBoards);

export default router;
