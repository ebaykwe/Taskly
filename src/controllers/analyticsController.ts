import { Request, Response } from 'express';
import AnalyticsService from '../services/analyticsService';
import { AuthRequest } from '../middlewares/authMiddleware';

class AnalyticsController {
  async getWeeklyReport(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const report = await AnalyticsService.getWeeklyReport(req.user.organization.toString());
      res.status(200).json(report);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
}

export default new AnalyticsController();
