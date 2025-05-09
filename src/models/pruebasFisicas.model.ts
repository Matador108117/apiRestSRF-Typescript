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

import { EvaluacionesFisica } from './evaluacionesFisicas.model.js';
import { DecimalDataType } from 'sequelize';

@Table({tableName: 'PRUEBAS_FISICAS'})
export class Prueba_fisica extends Model<Prueba_fisica>{
@PrimaryKey
@AutoIncrement
@Column(DataType.INTEGER)
declare id_prueba: number;

@ForeignKey(()=> EvaluacionesFisica)
@AllowNull(false)
@Column(DataType.INTEGER)
declare  id_evaluacion_fisica: number;

@AllowNull
@Column(DataType.STRING)
declare tipo: string

@AllowNull(false)
@Column(DataType.DECIMAL(5,2))
declare resultado: DecimalDataType;
}
