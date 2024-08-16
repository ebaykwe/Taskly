import Board, { IBoard } from '../models/boardModel';

class BoardService {
  async createBoard(boardData: Partial<IBoard>): Promise<IBoard> {
    if (!boardData.name || !boardData.organization) {
      throw new Error('Name and organization are required to create a board.');
    }

    const board = new Board(boardData);
    await board.save();
    return board.toObject() as IBoard;
  }

  async getBoards(organizationId: string): Promise<IBoard[]> {
    const boards = await Board.find({ organization: organizationId }).lean();
    return boards.map(board => {
      const {
        _id,
        name,
        organization,
        description,
        createdDate,
        updatedDate,
        members,
        status,
        tasks
      } = board;

      return {
        _id,
        name,
        organization,
        description,
        createdDate,
        updatedDate,
        members,
        status,
        tasks
      } as IBoard;
    });
  }
}

export default new BoardService();
