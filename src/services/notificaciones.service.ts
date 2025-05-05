import { promises } from "dns"
import { Notificacion } from "../models/notificaciones.model.js"
import { NotificacionesDTOin } from "../dtos/notificaciones/notificaciones.dto.in.js"
import { plainToInstance } from "class-transformer";
import { NotificacionesDTOout } from "../dtos/notificaciones/notificaciones.dto.out.js";
export class notificacionesService {
    async getallNotificaciones(): Promise<NotificacionesDTOin[]> {
        const notificaciones = await Notificacion.findAll();
        return notificaciones.map(notificacion => plainToInstance(NotificacionesDTOout, notificacion.toJSON()))

    }
    async createNotificacion(data: any): Promise<NotificacionesDTOout> {
        const newNotificacion = await Notificacion.create(data);
        return plainToInstance(NotificacionesDTOout, newNotificacion.toJSON());

    }
    async getNotifiacionByid(id: string): Promise<NotificacionesDTOout | null> {
        const notificacion = await Notificacion.findOne({ where: { id_notificacion: id } });
        return notificacion ? plainToInstance(NotificacionesDTOout, notificacion.toJSON()) : null
    }
    async updateNotificacion(id: string, data: any): Promise<NotificacionesDTOout | null> {
        const notificacion = await Notificacion.findOne({ where: { id_notificacion: id } });
        if (!notificacion) return null;
        Object.assign(notificacion, data);

        await notificacion.save();
        return plainToInstance(NotificacionesDTOout, notificacion.toJSON())
    }
    async deleteNotification(id: string): Promise<boolean> {
        const notificacion = await Notificacion.findOne({ where: { id_notificacion: id } });
        if (!notificacion) return false;

        await notificacion.destroy()
        return true;
    }
}