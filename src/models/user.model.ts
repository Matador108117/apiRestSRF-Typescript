import {
  Table,
  Column,
  Model,
  DataType,
  IsEmail,
  Length,
  PrimaryKey,
  AllowNull,
  Unique,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({})
export class Fituser extends Model<Fituser> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare userid: number;

  @AllowNull(false)
  @Length({ min: 10, max: 10 })
  @Unique
  @Column(DataType.STRING)
  declare matricula: string;

  @AllowNull(false)
  @Length({ min: 2, max: 50 })
  @Column(DataType.STRING)
  declare nombre: string;

  @AllowNull(false)
  @Length({ min: 2, max: 50 })
  @Column(DataType.STRING)
  declare apellido: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column(DataType.STRING)
  declare email: string;

  @AllowNull(false)
  @Length({ min: 6, max: 16 })
  @Column(DataType.STRING)
  declare password: string;

  @AllowNull(false)
  @Column(DataType.DATEONLY)
  declare fecha_inicio: string;

  @Column(DataType.DATEONLY)
  declare fecha_actualizacion?: string;
}
