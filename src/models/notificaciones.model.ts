import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
} from 'sequelize-typescript';
import { Fituser } from './user.model.js';

@Table({ tableName: 'NOTIFICACIONES' })
export class Notificacion extends Model<Notificacion> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id_notificacion: number;

    
    @ForeignKey(() => Fituser)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare id_usuario: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare titulo: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    declare mensaje: string;

    @AllowNull(false)
    @Column(DataType.BOOLEAN)
    declare leido: boolean;
}
