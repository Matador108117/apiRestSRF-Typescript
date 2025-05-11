import { UserService } from '../services/user.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';
const userService = new UserService();
export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    }
    catch {
        return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        if (user)
            return res.status(405).json({ respuesta: 'Ya existe un usuario con esa matricula' });
        return res.status(200).json(user);
    }
    catch {
        return res.status(500).json({ error: 'Error al crear usuario' });
    }
};
export const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json(errorMessages.ERROR_404_USER);
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: 'error al buscar el usuario' });
    }
};
export const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return res.status(203).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: 'error al actualizar el usuario' });
    }
};
export const deleteUser = async (req, res) => {
    try {
        const idDeleted = await userService.deleteUser(req.params.id);
        if (idDeleted)
            return res.status(200).json({ message: 'El usuario se eliminó correctamente' });
        return res.status(404).json({ error: errorMessages.ERROR_404_USER });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};
export const getUserNotificationsById = async (req, res) => {
    try {
        const userData = await userService.getUserNotificationsById(req.params.id);
        if (!userData)
            return res.status(404).json({ error: 'Usuario no encontrado' });
        return res.status(200).json(userData);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al obtener notificaciones del usuario' });
    }
};
export const getUserEvaluationsById = async (req, res) => {
    try {
        const user = await userService.getUserEvaluationsById(req.params.id);
        if (!user)
            return res.status(404).json({ respuesta: 'No se encontro el usuario' });
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({ error: 'Error al buscar el usuarioo' });
    }
};
