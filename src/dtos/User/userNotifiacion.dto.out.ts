import { Expose, Type } from 'class-transformer';
import { NotificacionesDTOout } from '../notificaciones/notificaciones.dto.out.js';

export class UserNotificationsDTOOut {
    @Expose()
    nombre!: string;

    @Expose()
    matricula!: string;

    @Expose()
    @Type(() => NotificacionesDTOout)
    notifications!: NotificacionesDTOout[];
}