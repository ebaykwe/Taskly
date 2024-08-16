import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import AnalyticsController from '../controllers/analyticsController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Analytics
 *   description: Analytics routes
 */

/**
 * @swagger
 * /analytics/weekly-report:
 *   get:
 *     summary: Get the weekly report
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Weekly report retrieved successfully
 *       401:
 *         description: Unauthorized access
 */
router.get('/weekly-report', authMiddleware, (req, res) => AnalyticsController.getWeeklyReport(req, res));

export default router;
