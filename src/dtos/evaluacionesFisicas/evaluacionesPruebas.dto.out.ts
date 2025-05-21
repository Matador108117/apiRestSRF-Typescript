import { Expose, Type } from "class-transformer";
import { PruebaFisicaDTOOut } from "../pruebasFisicas/pruebasFisicas.dto.out.js";
export class EvaluacionesPruebasDTOout {
    @Expose()
    id_evaluacion_fisica!: number;

    @Expose()
    id_usuario!: number;
    
    @Expose()
    @Type(() => PruebaFisicaDTOOut)
    physical_evaluations!: PruebaFisicaDTOOut[];
}