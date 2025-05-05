
import { Request, Response } from 'express';
import { notificacionesService } from '../services/notificaciones.service.js';
const serviceNotificaciones = new notificacionesService();

export const getallNotificaciones = async (req: Request, res: Response) => {
    try {
        const notificaciones = await serviceNotificaciones.getallNotificaciones();
        if (notificaciones.length > 0) {
            res.status(200).json(notificaciones);
        }
        else {
            res.status(404).json({ print: 'No hay notificaciones' });
        }
    } catch (error) {
        res.status(500).json({ error: 'error al cargar notificaciones' });

    }
}
export const createNotificacion = async (req: Request, res: Response) => {
    try {
        const newNotificacion = await serviceNotificaciones.createNotificacion(req.body);
        res.status(200).json(newNotificacion);
    } catch (error) {
        res.status(500).json({ error: 'fallo al crear el usuario' });

    }

}
export const getNotifiacionByid = async (req: Request, res: Response) => {
    try {
        const notificacion = await serviceNotificaciones.getNotifiacionByid(req.params.id);
        if (notificacion) {
            res.status(200).json(notificacion);
        }
        else {
            res.status(404).json({print: 'notificacion no encontrada'});
        }
    } catch (error) {
        res.status(500).json({ error: 'error al buscar el usuario' });
    }
}
