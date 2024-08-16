import Task, { ITask } from '../models/taskModel';

class TaskService {
  async createTask(taskData: Partial<ITask>, organizationId: string): Promise<ITask> {
    const task = new Task({ ...taskData, organization: organizationId });
    await task.save();
    return task;
  }

  async getTasks(boardId: string, organizationId: string): Promise<ITask[]> {
    return Task.find({ board: boardId, organization: organizationId });
  }
}

export default new TaskService();
