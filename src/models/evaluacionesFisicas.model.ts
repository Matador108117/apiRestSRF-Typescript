import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
    Default,
} from 'sequelize-typescript';
import { Fituser } from './user.model.js';
@Table({ tableName: 'EVALUACIONES_FISICAS' })
export class EvaluacionesFisica extends Model<EvaluacionesFisica> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id_evaluacion_fisica: number;

    @ForeignKey(() => Fituser)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare id_usuario: number;
    
    @AllowNull(false)
    @Column(DataType.DATEONLY)
    declare  fecha_evaluacion: string;
    
    @AllowNull(false)
    @Column(DataType.DECIMAL(5,2))
    declare peso: number;
    
    @AllowNull(false)
    @Column(DataType.DECIMAL(5,2))
    declare altura: number;
    
    @Default('')
    @Column(DataType.TEXT)
    declare observaciones: string;
    
}