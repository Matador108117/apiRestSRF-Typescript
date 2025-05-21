import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    AllowNull,
} from 'sequelize-typescript';

@Table({ tableName: 'RUTINAS' })
export class Rutina extends Model<Rutina> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id_rutina: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    declare nombre: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    declare descripcion: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    declare nivel_dificultad: number;
}

