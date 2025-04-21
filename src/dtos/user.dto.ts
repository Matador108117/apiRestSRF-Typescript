

import { IsEmail, IsNotEmpty, Length, IsUUID } from 'class-validator';
import {  Expose } from 'class-transformer';
import { AutoIncrement, Column, DataType } from 'sequelize-typescript';

export class FituserDto {
  @Expose()
  @AutoIncrement
  @Column(DataType.INTEGER)
  userid!: number;

  @IsNotEmpty()
  @Length(10, 10)
  @Expose()
  matricula!: string;

  @IsNotEmpty()
  @Length(2, 50)
  @Expose()
  nombre!: string;

  @IsNotEmpty()
  @Length(2, 50)
  @Expose()
  apellido!: string;

  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email!: string;

  @IsNotEmpty()
  @Length(6, 16)
  @Expose()
  password!: string;

  @IsNotEmpty()
  @Expose()
  fecha_inicio!: string;
}
