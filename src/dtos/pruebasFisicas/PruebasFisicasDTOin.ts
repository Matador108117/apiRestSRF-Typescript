import { Expose } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
export class PruebasFisicasDTOin {
    @Expose()
    @IsNotEmpty()
    @IsInt()
    @Min(1)
    id_evaluacion_fisica!: number;

    @Expose()
    @IsNotEmpty()
    @IsString()
    tipo!: string
    
    @Expose()
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 },
        { message: 'El valor debe ser un número válido' })
    @Min(0)
    resultado!: number;
}