import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Fituser } from '../models/user.model.js';

const SECRET = process.env.JWT_SECRET || 'super_secreto';

export const login = async (req: Request, res: Response) => {
  const { matricula, password } = req.body;

  try {
    const user = await Fituser.findOne({ where: { matricula } });

    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign(
      {
        id: user.userid,
        matricula: user.matricula,
        nombre: user.nombre,
      },
      SECRET,
      { expiresIn: '2h' }
    );

    res.json({ message: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error interno', details: error });
  }
};
