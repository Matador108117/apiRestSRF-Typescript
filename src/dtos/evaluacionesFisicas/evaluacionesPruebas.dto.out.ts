import { Expose, Type } from "class-transformer";
import { PruebasFisicasDTOout } from "../pruebasFisicas/PruebasFisicasDTOout.js";
export class EvaluacionesPruebasDTOout {
    @Expose()
    id_evaluacion_fisica!: number;

    @Expose()
    id_usuario!: number;
    
    @Expose()
    @Type(() => PruebasFisicasDTOout)
    physical_evaluations!: PruebasFisicasDTOout[];
}