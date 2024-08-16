import { Router } from 'express';
import NotificationController from '../controllers/notificationController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification routes
 */

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Send a notification
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SendNotification'
 *     responses:
 *       200:
 *         description: Notification sent successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', authMiddleware, NotificationController.sendNotification);

/**
 * @swagger
 * /notifications/task-assignment:
 *   post:
 *     summary: Notify user of task assignment
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TaskAssignmentNotification'
 *     responses:
 *       200:
 *         description: Notification sent successfully
 *       400:
 *         description: Invalid input
 */
router.post('/task-assignment', authMiddleware, NotificationController.notifyTaskAssignment);

/**
 * @swagger
 * /notifications/due-date-reminder:
 *   post:
 *     summary: Notify user of due date reminder
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DueDateReminderNotification'
 *     responses:
 *       200:
 *         description: Notification sent successfully
 *       400:
 *         description: Invalid input
 */
router.post('/due-date-reminder', authMiddleware, NotificationController.notifyDueDateReminder);

/**
 * @swagger
 * /notifications/comment:
 *   post:
 *     summary: Notify user of a comment on a task
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommentNotification'
 *     responses:
 *       200:
 *         description: Notification sent successfully
 *       400:
 *         description: Invalid input
 */
router.post('/comment', authMiddleware, NotificationController.notifyCommentOnTask);

export default router;
