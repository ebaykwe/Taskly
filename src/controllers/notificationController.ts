import { Request, Response } from 'express';
import NotificationService from '../services/notificationService';

class NotificationController {
  async sendNotification(req: Request, res: Response): Promise<void> {
    const { to, message } = req.body;

    if (!to || !message) {
      res.status(400).json({ error: 'Recipient email and message are required' });
      return;
    }

    const subject = 'Notification';
    const text = message;
    const html = `<p>${message}</p>`;

    try {
      await NotificationService.sendNotification({ to, subject, text, html });
      res.status(200).json({ message: 'Notification sent' });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  async notifyTaskAssignment(req: Request, res: Response): Promise<void> {
    const { to, taskTitle } = req.body;

    if (!to || !taskTitle) {
      res.status(400).json({ error: 'Recipient email and task title are required' });
      return;
    }

    try {
      await NotificationService.notifyTaskAssignment(to, taskTitle);
      res.status(200).json({ message: 'Task assignment notification sent' });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  async notifyDueDateReminder(req: Request, res: Response): Promise<void> {
    const { to, taskTitle, timeLeft } = req.body;

    if (!to || !taskTitle || !timeLeft) {
      res.status(400).json({ error: 'Recipient email, task title, and time left are required' });
      return;
    }

    try {
      await NotificationService.notifyDueDateReminder(to, taskTitle, timeLeft);
      res.status(200).json({ message: 'Due date reminder notification sent' });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  async notifyCommentOnTask(req: Request, res: Response): Promise<void> {
    const { to, taskTitle, commenter } = req.body;

    if (!to || !taskTitle || !commenter) {
      res.status(400).json({ error: 'Recipient email, task title, and commenter are required' });
      return;
    }

    try {
      await NotificationService.notifyCommentOnTask(to, taskTitle, commenter);
      res.status(200).json({ message: 'Comment notification sent' });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
}

export default new NotificationController();
