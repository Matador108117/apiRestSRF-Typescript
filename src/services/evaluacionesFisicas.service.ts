import {  plainToInstance } from "class-transformer";
import { EvaluacionesFisicasDTOout } from "../dtos/evaluacionesFisicas/evaluacionesFisicas.dto.out.js";
import { EvaluacionesFisica } from "../models/evaluacionesFisicas.model.js";

export class EvaluacionesFisicasService {
    async getAllEvaluacionesFisica(): Promise<EvaluacionesFisicasDTOout[]> {
        const evaluaciones = await EvaluacionesFisica.findAll();
        return evaluaciones.map(evaluacion => plainToInstance(EvaluacionesFisicasDTOout, evaluacion.toJSON()));
    }

    async getEvalucacionById(id: string): Promise<EvaluacionesFisicasDTOout | null> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        return evaluacion ? plainToInstance(EvaluacionesFisicasDTOout, evaluacion.toJSON()) : null;
    }

    async createEvaluacionFisica(data: any): Promise<EvaluacionesFisicasDTOout> {
        const evaluacion = await EvaluacionesFisica.create(data);
        return plainToInstance(EvaluacionesFisicasDTOout, evaluacion.toJSON());


    }

    async updateEvaluacionFisica(data: any, id: string): Promise<EvaluacionesFisicasDTOout | null> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        if (!evaluacion) return null;

        Object.assign(evaluacion, data);
        await evaluacion.save();

        return plainToInstance(EvaluacionesFisicasDTOout, evaluacion.toJSON());

    }

    async deleteEvaluacion(id: string): Promise<boolean> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        if (!evaluacion) return false;

        evaluacion.destroy()
        return true;
    }

}