import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  Length,
  PrimaryKey,
  Default,
  AllowNull,
  Unique,
} from 'sequelize-typescript';

@Table
export class Fituser extends Model {
  @PrimaryKey
  @Default(DataType.INTEGER)
  @Column(DataType.INTEGER)
  userid!: number;

  @AllowNull(false)
  @Length({ min: 10, max: 10 })
  @Unique
  @Column(DataType.STRING)
  matricula!: string;

  @AllowNull(false)
  @Length({ min: 2, max: 50 })
  @Column(DataType.STRING)
  nombre!: string;

  @AllowNull(false)
  @Length({ min: 2, max: 50 })
  @Column(DataType.STRING)
  apellido!: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  email!: string;

  @AllowNull(false)
  @Length({ min: 6, max: 16 })
  @Column(DataType.STRING)
  password!: string;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  fecha_inicio!: string;

  @Column(DataType.DATEONLY)
  fecha_actualizacion?: string;
}
