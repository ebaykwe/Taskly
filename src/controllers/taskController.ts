import { Response } from 'express';
import TaskService from '../services/taskService';
import { AuthRequest } from '../middlewares/authMiddleware';

class TaskController {
  async createTask(req: AuthRequest, res: Response) {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const task = await TaskService.createTask(req.body, req.user.organization.toString());
      return res.status(201).json(task);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json({ error: err.message });
    }
  }

  async getTasks(req: AuthRequest, res: Response): Promise<Response> {
    const { boardId } = req.params;
    try {
      const tasks = await TaskService.getTasks(boardId, req.user.organization.toString());
      return res.status(200).json(tasks);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new TaskController();
