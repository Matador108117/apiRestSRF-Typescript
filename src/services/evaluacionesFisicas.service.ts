import {  plainToInstance } from "class-transformer";
import { evaluacionesFisicasDTOout } from "../dtos/evaluacionesFisicas/evaluacionesFisicas.dto.out.js";
import { EvaluacionesFisica } from "../models/evaluacionesFisicas.model.js";

export class EvaluacionesFisicasService {
    async getAllEvaluacionesFisica(): Promise<evaluacionesFisicasDTOout[]> {
        const evaluaciones = await EvaluacionesFisica.findAll();
        return evaluaciones.map(evaluacion => plainToInstance(evaluacionesFisicasDTOout, evaluacion.toJSON));
    }

    async getEvalucacionById(id: string): Promise<evaluacionesFisicasDTOout | null> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        return evaluacion ? plainToInstance(evaluacionesFisicasDTOout, evaluacion.toJSON()) : null;
    }

    async createEvaluacionFisica(data: any): Promise<evaluacionesFisicasDTOout> {
        const evaluacion = await EvaluacionesFisica.create(data);
        return plainToInstance(evaluacionesFisicasDTOout, evaluacion.toJSON());


    }

    async updateEvaluacionFisica(data: any, id: string): Promise<evaluacionesFisicasDTOout | null> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        if (!evaluacion) return null;

        Object.assign(evaluacion, data);
        await evaluacion.save();

        return plainToInstance(evaluacionesFisicasDTOout, evaluacion.toJSON);

    }

    async deleteEvaluacion(id: string): Promise<boolean> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        if (!evaluacion) return false;

        evaluacion.destroy()
        return true;
    }

}