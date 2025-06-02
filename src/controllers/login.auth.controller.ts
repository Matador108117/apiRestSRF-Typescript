import { Request, Response } from 'express';
import { LoginAuthService } from '../services/login.auth.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';
const serv = new LoginAuthService();
export const login = async (req: Request, res: Response) => {
    try {
        const token = await serv.loginUser(req.body);
        return res.status(200).json(token);
    } catch (error: any) {
        if(error.code == 'USER_NOT_FOUND') return res.status(404).json({ error: errorMessages.ERROR_404_USER, details: error });
        if(error.code == 'INVALID_PASSWORD') return res.status(401).json({ error: errorMessages.INVALID_PASSWORD, details: error });
        return res.status(500).json({ error:errorMessages.ERROR_500_LOGIN, details: error });
    }
    /*
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
                { expiresIn:   '6h' }
            );
    
            res.json({ message: 'Login exitoso', token });
    
        } catch (error) {
            res.status(500).json({ error: 'Error interno', details: error });
        }
            */
};
