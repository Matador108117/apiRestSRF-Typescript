import { IsInt, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';
import { Min } from 'sequelize-typescript';

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
  @IsNumber()
  resultado!: number;
}
