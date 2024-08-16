import Task from '../models/taskModel';

class AnalyticsService {
  async getWeeklyReport(organizationId: string) {
    const completedTasks = await Task.find({ organization: organizationId, status: 'completed' }).countDocuments();
    const pendingTasks = await Task.find({ organization: organizationId, status: 'pending' }).countDocuments();
    const averageCompletionTime = await Task.aggregate([
      { $match: { organization: organizationId, status: 'completed' } },
      { $group: { _id: null, avgTime: { $avg: { $subtract: ['$completedAt', '$createdAt'] } } } },
    ]);

    return {
      completedTasks,
      pendingTasks,
      averageCompletionTime: averageCompletionTime[0]?.avgTime || 0,
    };
  }
}

export default new AnalyticsService();
