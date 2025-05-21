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
  
  import { UsuarioRutina } from './usuarioRutinas.model.js';
  
  @Table({ tableName: 'AVANCES' })
  export class Avance extends Model<Avance> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id_avance: number;
  
    @ForeignKey(() => UsuarioRutina)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare id_usuario_rutina: number;
  
    @AllowNull(false)
    @Column(DataType.DATEONLY)
    declare fecha_avance: string;
  
    @AllowNull(true)
    @Column(DataType.DECIMAL(5, 2))
    declare peso_actual?: number;
  
    @AllowNull(true)
    @Column(DataType.TEXT)
    declare observacion?: string;
  }
  