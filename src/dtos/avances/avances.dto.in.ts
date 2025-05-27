// src/dtos/avances/avances.dto.in.ts
import { IsNotEmpty, IsOptional, IsString,IsDateString,Min, Max, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class AvancesDTOIn {
  @Expose()
  @IsNotEmpty()
  @Min(1)
  id_usuario_rutina!: number;

  @Expose()
  @IsNotEmpty()
  @IsDateString()
  fecha_avance!: string;

  @Expose()
  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 }, { message: 'El valor debe ser un número válido' })
      @Min(20)
      @Max(250)
  peso_actual?: number;

  @Expose()
  @IsOptional()
  @IsString()
  observacion?: string;
}
