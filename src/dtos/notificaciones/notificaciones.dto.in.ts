import { IsNotEmpty, IsInt, IsString, IsBoolean } from 'class-validator';
import { Expose } from 'class-transformer';

export class NotificacionesDTOin {
    @Expose()
    @IsNotEmpty()
    @IsInt()
    id_usuario!: number;

    @Expose()
    @IsNotEmpty()
    @IsString()
    titulo!: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    mensaje!: string;

    @Expose()
    @IsNotEmpty()
    @IsBoolean()
    leido!: boolean;
}
