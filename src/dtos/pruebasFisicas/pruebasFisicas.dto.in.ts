import { IsInt, IsNotEmpty, IsString, IsNumber,Max, Min } from 'class-validator';
import { Expose } from 'class-transformer';

export class PruebaFisicaDTOIn {
  @Expose()
  @IsNotEmpty()
  @IsInt()
  id_evaluacion_fisica!: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  tipo!: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 }, { message: 'El valor debe ser un número válido' })
        @Min(20)
        @Max(250)
  resultado!: number;
}
