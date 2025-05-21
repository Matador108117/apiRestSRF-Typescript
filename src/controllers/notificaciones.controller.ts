
import { Request, Response } from 'express';
import { notificacionesService } from '../services/notificaciones.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';
const serviceNotificaciones = new notificacionesService();

export const getallNotificaciones = async (req: Request, res: Response) => {
    try {
        const notificaciones = await serviceNotificaciones.getallNotificaciones();
        if (notificaciones.length > 0) return res.status(200).json(notificaciones);
        return res.status(404).json({ print: errorMessages.NO_NOTIFICATIONS_EXIST});

    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_GET_NOTIFICATIONS });

    }
}
export const createNotificacion = async (req: Request, res: Response) => {
    try {
        const newNotificacion = await serviceNotificaciones.createNotificacion(req.body);
        if (!newNotificacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_USER });
        return res.status(200).json(newNotificacion);
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_NOTIFICATIONS });

    }

}
export const getNotifiacionByid = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.getNotifiacionByid(req.params.id);
        if (notificacion) return res.status(200).json(notificacion);
        return res.status(404).json({ print: errorMessages.ERROR_404_NOTIFICATIONS });
    } catch (error) {
        res.status(500).json({ error: errorMessages.ERROR_404_NOTIFICATIONS });
    }
}

export const updateNotification = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.updateNotificacion(req.params.id, req.body);
        if (notificacion) return res.status(200).json(notificacion);
        return res.status(404).json({ respuesta: errorMessages.ERROR_404_NOTIFICATIONS });

    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_NOTIFICATIONS })
    }
}

export const deleteNotification = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.deleteNotification(req.params.id);
        if (!notificacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_NOTIFICATIONS})

    return res.status(200).json({ respuesta: errorMessages.OK_200_DELETE_NOTIFICATION });
        

    } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_NOTIFICATION });
    }

}
