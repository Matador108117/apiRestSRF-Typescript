import { Request, Response } from 'express';
import { EvaluacionesFisicasService } from '../services/evaluacionesFisicas.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';
const serv = new EvaluacionesFisicasService();
export const getAllEvaluacionesFisicas = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.getAllEvaluacionesFisica()
        if (evaluacion.length > 0) {
            return res.status(200).json(evaluacion)
        } else {
            return res.status(404).json({ respuesta: errorMessages.NO_EVALUATION_EXIST });
        }
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_GET_EVALUATIONS })
    }
}
export const createEvaluacionFisica = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.createEvaluacionFisica(req.body);
        if (!evaluacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_USER});
        return res.status(200).json(evaluacion);
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_EVALUATIONS });

    }

}

export const getEvalucacionFisicaById = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.getEvalucacionById(req.params.id);
        if (!evaluacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_EVALUACION_FISICA })
        return res.status(200).json(evaluacion)
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_GET_EVALUATIONS })

    }
}

export const updateEvaluacionFisica = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.updateEvaluacionFisica(req.body, req.params.id);

        if (!evaluacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_EVALUACION_FISICA })
        return res.status(200).json({})
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_EVALUATIONS });
    }
}
export const deleteEvaluacion = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.deleteEvaluacion(req.params.id);
        if (!evaluacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_EVALUACION_FISICA });
        return res.status(200).json({ respuesta: errorMessages.OK_200_DELETE_EVALUATIONS });
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_EVALUATIONS });
    }
}
export const getPruebasByEvaluacionId = async (req: Request, res: Response) => {
    try {
        
        const evaluacion = await serv.getPruebasByEvaluacionId(req.params.id);
        
        if (!evaluacion) return res.status(404).json({ respuesta: errorMessages.ERROR_404_EVALUACION_FISICA });
        
        return res.status(200).json(evaluacion);
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_GET_EVALUATIONS });
    }
}