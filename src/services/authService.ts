import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/userModel';
import config from '../config/config';

class AuthService {
  async register(email: string, password: string, name: string, organization: string, role: string, username: string): Promise<IUser> {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const user = new User({ email, password, name, organization, role, username, }); 
    await user.save();
    return user;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid email or password');
    }
    const token = jwt.sign(
      { id: user._id, role: user.role }, config.jwt.secret, { expiresIn: '1h' }); 
    return token;
  }

  async resetPassword(email: string, newPassword: string): Promise<void> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    user.password = newPassword; 
    await user.save();
  }
}

export default new AuthService();
