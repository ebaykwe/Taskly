import { Response } from 'express';
import UserService from '../services/userService';
import { AuthRequest } from '../middlewares/authMiddleware';

class UserController {
  async getUser(req: AuthRequest, res: Response): Promise<Response> {
    try {
      const user = await UserService.getUser(req.user!.id,);
      return res.status(200).json(user);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json({ error: err.message });
    }
  }

  async updateUser(req: AuthRequest, res: Response) {
    try {
      const user = await UserService.updateUser(req.user._id, req.body);
      res.status(200).json(user);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  async inviteUser(req: AuthRequest, res: Response): Promise<Response> {
    try {
      await UserService.inviteUser(req.body.email, req.user!.organization.toString());
      return res.status(200).json({ message: 'You have been invited to contribute to this task' });
    } catch (error) {
      const err = error as Error;
      return res.status(500).json({ error: err.message });
    }
  }
}

export default new UserController();
