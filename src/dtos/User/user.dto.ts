

import { IsEmail, IsNotEmpty, Length, IsUUID, IsString, isDateString, IsDateString } from 'class-validator';
import { Expose } from 'class-transformer';

export class FituserDto {

  @IsNotEmpty()
  @Length(10, 10)
  @Expose()
  matricula!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  nombre!: string;

  @IsNotEmpty()
  @Length(2, 50)
  @IsString()
  @Expose()
  apellido!: string;

  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(6, 16)
  password!: string;

  @Expose()
  @IsDateString()
  fecha_inicio!: string
}
