import { Expose } from "class-transformer";

export class PruebasFisicasDTOout{
    @Expose()
    id_prueba!: number;

    @Expose()
    id_evaluacion_fisica!: number;

    @Expose()
    tipo!: string;

    @Expose()
    resultado!: number;

    @Expose()
    createdAt!: string;

    @Expose()
    updatedAt!: string;
}