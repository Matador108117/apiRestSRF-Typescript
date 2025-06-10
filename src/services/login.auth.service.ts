import { Fituser } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || 'super_secreto_123';

export class LoginAuthService {
    async loginUser(data: any) {
        const user = await Fituser.findOne({ where: { matricula: data.matricula } });
        if (!user) {
            const error = new Error('Usuario no encontrado');
            (error as any).code = 'USER_NOT_FOUND';
            throw error;
        }
        const validPassword = await bcrypt.compare(data.password, user.password);
        if (!validPassword)  {
            const error = new Error('Contraseña incorrecta');
            (error as any).code = 'INVALID_PASSWORD';
            throw error;
        }
        const token = jwt.sign(
            {
                id: user.userid,
                matricula: user.matricula,
                nombre: user.nombre,
            },
            SECRET,
            { expiresIn: '6h' }
        );
        const id = user.userid;
        return { message: 'Login exitos', token, id, };

    }
}