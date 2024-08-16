import { Request, Response } from 'express';
import BoardService from '../services/boardService';
import { AuthRequest } from '../middlewares/authMiddleware'

class BoardController {
  async createBoard(req: AuthRequest, res: Response): Promise<void> {
    try {
      const board = await BoardService.createBoard(req.body);
      res.status(201).json(board);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  async getBoards(req: AuthRequest, res: Response): Promise<void> {
    try {
      const boards = await BoardService.getBoards(req.user!.organization.toString());
      res.status(200).json(boards);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
}

export default new BoardController();
