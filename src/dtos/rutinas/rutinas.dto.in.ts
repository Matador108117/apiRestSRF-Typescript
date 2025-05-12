// src/dtos/rutinas/rutinas.dto.in.ts
import { IsNotEmpty, IsString, IsInt, Min, Max } from 'class-validator';
import { Expose } from 'class-transformer';

export class RutinaDTOIn {
  @Expose()
  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  descripcion!: string;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  nivel_dificultad!: number;
}
