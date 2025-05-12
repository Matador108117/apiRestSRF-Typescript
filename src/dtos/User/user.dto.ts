

import { IsEmail, IsNotEmpty, Length, IsUUID, IsString, isDateString, IsDateString, Matches } from 'class-validator';
import { Expose } from 'class-transformer';

export class FituserDto {
  
  @Expose()
  @IsNotEmpty()
  @Length(10, 10)
  @Matches(/^zS\d{8}$/, {
    message: 'La matrícula debe comenzar con "zS" seguido de 8 dígitos numéricos',
  })
  matricula!: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  nombre!: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
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
  @IsNotEmpty()
  @IsDateString()
  fecha_inicio!: string
}
