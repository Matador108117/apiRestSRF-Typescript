import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    AllowNull,
    BelongsTo,
  } from 'sequelize-typescript';
  
  import { Fituser } from './user.model.js';
  import { Rutina } from './rutinas.model.js';
  
  @Table({ tableName: 'USUARIO_RUTINAS' })
  export class UsuarioRutina extends Model<UsuarioRutina> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id_usuario_rutina: number;
  
    @ForeignKey(() => Fituser)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare id_usuario: number;
  
  
    @ForeignKey(() => Rutina)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare id_rutina: number;
  
    @BelongsTo(() => Rutina)
    declare rutina: Rutina;
  
    @AllowNull(false)
    @Column(DataType.DATEONLY)
    declare fecha_asignacion: string;
  }
  