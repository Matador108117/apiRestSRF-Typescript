import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { errorMessages } from '../configs/SharedMessages.enum.js';

const SECRET = process.env.JWT_SECRET || 'super_secreto_123';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1]; // Formato: Bearer <token>
    if (!token) return res.status(401).json({ error: errorMessages.ERROR_401_NOT_TOKEN });
    jwt.verify(token, SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: errorMessages.ERROR_403_INVALID_TOKEN, details: err });
        (req as any).user = user;
        next();
    });
};
