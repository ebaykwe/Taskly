import { Request, Response } from 'express';
import { registerSchema, loginSchema } from '../validators/authValidator';
import AuthService from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { email, password, name, organization, role, username } = req.body;
    const user = await AuthService.register(email, password, name, organization, role, username, );
    res.status(201).json(user);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const { email, password } = req.body;
    const token = await AuthService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  const { email, newPassword } = req.body;

  try {
    await AuthService.resetPassword(email, newPassword);
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ message: err.message });
  }
};
