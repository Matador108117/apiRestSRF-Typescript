import { Expose, Type } from "class-transformer";
import { EvaluacionesPruebasDTOout } from "../evaluacionesFisicas/evaluacionesPruebas.dto.out.js";

export class UserEvaluacionPruebasDTOout {
    @Expose()
    userid!: number;

    @Expose()
    matricula!: string;

    @Expose()
    @Type(() => EvaluacionesPruebasDTOout)
    evaluations!: EvaluacionesPruebasDTOout[];
}
