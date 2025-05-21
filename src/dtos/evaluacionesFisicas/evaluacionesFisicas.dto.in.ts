import { IsNotEmpty, IsInt, IsString, Min,  IsDateString, IsNumber, Matches,  Max, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';

export class EvaluacionesFisicasDTOin {
    @Expose()
    @IsNotEmpty()
    @IsInt()
    @Min(1, { message: 'the minimun value is 1' })
    id_usuario!: number;

    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsDateString()
    fecha_evaluacion!: string;

    @Expose()
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 }, { message: 'El valor debe ser un número válido' })
    @Min(20)
    @Max(250)
    peso!: number;
    
    @Expose()
    @IsNotEmpty()
    @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 }, { message: 'El valor debe ser un número válido' })
    @Min(1)
    @Max(3)
    altura!: number;
    
    @Expose()
    @IsOptional()
    @IsString()
    observaciones!: string;

}