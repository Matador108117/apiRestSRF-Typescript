import { Expose, Type } from "class-transformer";
import { EvaluacionesFisicasDTOout } from "../evaluacionesFisicas/evaluacionesFisicas.dto.out.js";

export class UserEvaluacionesDTOout{
    @Expose()
    nombre!: string;

    @Expose()
    matricula!: string;

    @Expose()
    @Type(() => EvaluacionesFisicasDTOout)
    notifications!: EvaluacionesFisicasDTOout[];
}