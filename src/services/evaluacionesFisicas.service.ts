import { plainToInstance } from "class-transformer";
import { EvaluacionesFisicasDTOout } from "../dtos/evaluacionesFisicas/evaluacionesFisicas.dto.out.js";
import { EvaluacionesFisica } from "../models/evaluacionesFisicas.model.js";
import { EvaluacionesPruebasDTOout } from "../dtos/evaluacionesFisicas/evaluacionesPruebas.dto.out.js";
import { Prueba_fisica } from "../models/pruebasFisicas.model.js";
import { Fituser } from "../models/user.model.js";

export class EvaluacionesFisicasService {
    async getAllEvaluacionesFisica(): Promise<EvaluacionesFisicasDTOout[]> {
        const evaluaciones = await EvaluacionesFisica.findAll();
        return evaluaciones.map(evaluacion => plainToInstance(EvaluacionesFisicasDTOout, evaluacion.toJSON()));
    }

    async getEvalucacionById(id: string): Promise<EvaluacionesFisicasDTOout | null> {
        const evaluacion = await EvaluacionesFisica.findOne({ where: { id_evaluacion_fisica: id } });
        return evaluacion ? plainToInstance(EvaluacionesFisicasDTOout, evaluacion.toJSON()) : null;
    }

    async createEvaluacionFisica(data: any): Promise<EvaluacionesFisicasDTOout | null> {
        const user = await Fituser.findOne({ where: { userid: data.id_usuario } });
        if (!user) return null;
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
async getPruebasByEvaluacionId(id: string): Promise<EvaluacionesPruebasDTOout | null> {

        const evaluacion = await EvaluacionesFisica.findOne({
            where: { id_evaluacion_fisica: id },
            include: [{ model: Prueba_fisica, as: 'physical_evaluations' }],
        });


        if (!evaluacion) return null;

        return plainToInstance(EvaluacionesPruebasDTOout, evaluacion.toJSON(), {
            excludeExtraneousValues: true,
        });
}

}