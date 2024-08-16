import { sendEmail } from '../utils/email';

class NotificationService {
  async sendNotification(notificationData: { to: string; subject: string; text: string; html: string }) {
    await sendEmail(notificationData.to, notificationData.subject, notificationData.text, notificationData.html);
  }

  async notifyTaskAssignment(to: string, taskTitle: string) {
    const subject = `You have been assigned to a new task: ${taskTitle}`;
    const text = `You have been assigned to the task "${taskTitle}". Please check it out in Taskly.`;
    const html = `<p>You have been assigned to the task "<strong>${taskTitle}</strong>". Please check it out in Taskly.</p>`;
    await this.sendNotification({ to, subject, text, html });
  }

  async notifyDueDateReminder(to: string, taskTitle: string, timeLeft: string) {
    const subject = `Reminder: Task "${taskTitle}" is due in ${timeLeft}`;
    const text = `This is a reminder that the task "${taskTitle}" is due in ${timeLeft}. Please ensure it is completed on time.`;
    const html = `<p>This is a reminder that the task "<strong>${taskTitle}</strong>" is due in <strong>${timeLeft}</strong>. Please ensure it is completed on time.</p>`;
    await this.sendNotification({ to, subject, text, html });
  }

  async notifyCommentOnTask(to: string, taskTitle: string, commenter: string) {
    const subject = `New comment on task: ${taskTitle}`;
    const text = `${commenter} has commented on the task "${taskTitle}". Please check it out in Taskly.`;
    const html = `<p><strong>${commenter}</strong> has commented on the task "<strong>${taskTitle}</strong>". Please check it out in Taskly.</p>`;
    await this.sendNotification({ to, subject, text, html });
  }

}

export default new NotificationService();
