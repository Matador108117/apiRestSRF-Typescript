import { Expose } from 'class-transformer';

export class NotificacionesDTOout {
    @Expose()
    id_notificacion!: number;

    @Expose()

    id_usuario!: number;

    @Expose()
    titulo!: string;

    @Expose()
    mensaje!: string;

    @Expose()
    leido!: boolean;

    @Expose()
    createdAt!: string;

    @Expose()
    updatedAt!: string;
}
