// src/dtos/avances/avances.dto.in.ts
import { IsNotEmpty, IsOptional, IsString, IsDecimal, IsDateString,Min } from 'class-validator';
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
  @IsDecimal()
  peso_actual?: number;

  @Expose()
  @IsOptional()
  @IsString()
  observacion?: string;
}
