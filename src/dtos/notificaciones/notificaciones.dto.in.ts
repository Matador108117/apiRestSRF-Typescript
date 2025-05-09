import { IsNotEmpty, IsInt, IsString, IsBoolean, Min } from 'class-validator';
import { Expose } from 'class-transformer';

export class NotificacionesDTOin {
    @Expose()
    @IsNotEmpty()
    @IsInt()
    @Min(1, {message: 'the minimun value is 1'})
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
