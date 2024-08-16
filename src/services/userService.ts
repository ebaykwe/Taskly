import User, { IUser } from '../models/userModel';
import { sendEmail } from '../utils/email';

class UserService {
  async getUser(userId: string): Promise<IUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(userId: string, updateData: any) {
    return User.findByIdAndUpdate(userId, updateData, { new: true });
  }

  async inviteUser(email: string, organizationId: string): Promise<void> {
    const invitationLink = `https://taskly.com/invite?email=${email}&organization=${organizationId}`;
    await sendEmail(email, 'Invitation to Taskly', 'You have been invited to join Taskly.', `<a href="${invitationLink}">Join Taskly</a>`);
  }
}

export default new UserService();
