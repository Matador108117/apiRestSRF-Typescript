
import { Request, Response } from 'express';
import { notificacionesService } from '../services/notificaciones.service.js';
const serviceNotificaciones = new notificacionesService();

export const getallNotificaciones = async (req: Request, res: Response) => {
    try {
        const notificaciones = await serviceNotificaciones.getallNotificaciones();
        if (notificaciones.length > 0) return res.status(200).json(notificaciones);
        return res.status(404).json({ print: 'No hay notificaciones' });

    } catch (error) {
        return res.status(500).json({ error: 'error al cargar notificaciones' });

    }
}
export const createNotificacion = async (req: Request, res: Response) => {
    try {
        const newNotificacion = await serviceNotificaciones.createNotificacion(req.body);
        return res.status(200).json(newNotificacion);
    } catch (error) {
        return res.status(500).json({ error: 'fallo al crear el usuario' });

    }

}
export const getNotifiacionByid = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.getNotifiacionByid(req.params.id);
        if (notificacion) return res.status(200).json(notificacion);
        return res.status(404).json({ print: 'notificacion no encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'error al buscar el usuario' });
    }
}

export const updateNotification = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.updateNotificacion(req.params.id, req.body);
        if (notificacion) return res.status(200).json(notificacion);
        return res.status(404).json({ respuesta: 'Notificacion no encontrada' });

    } catch (error) {
        return res.status(500).json({ error: 'error al actualizar el usuario' })
    }
}

export const deleteNotification = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.deleteNotification(req.params.id);
        if (!notificacion) return res.status(404).json({ respuesta: 'Notificacion no encontrada' })

    return res.status(200).json({ respuesta: 'La notificacion fue eliminada correctamente' });
        

    } catch (error) {
    return res.status(500).json({ error: 'error al intentar eliminar el usuario' });
    }

}
