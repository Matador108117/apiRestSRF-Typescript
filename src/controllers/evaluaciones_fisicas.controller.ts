import { Request, Response } from 'express';
import { EvaluacionesFisicasService } from '../services/evaluacionesFisicas.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';
const serv = new EvaluacionesFisicasService();
export const getAllEvaluacionesFisicas = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.getAllEvaluacionesFisica()
        if (evaluacion.length > 0) {
            res.status(200).json(evaluacion)
        } else {
            res.status(404).json({ respuesta: 'No hay evaluaciones fisicas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'error al recuperar lasd evaluaciones fisicas' })
    }
}
export const createEvaluacionFisica = async (req: Request, res: Response) => {
    try {
        const evaluacion = await serv.createEvaluacionFisica(req.body);
        res.status(200).json(evaluacion);
    } catch (error) {
        res.status(500).json({error: 'error al crear la evaluacion fisica'});
        
    }
    
}

export const getEvalucacionFisicaById = async (req: Request, res: Response) => {
    try {
        const evaluacion = serv.getEvalucacionById(req.params.id);
        if(!evaluacion) res.status(404).json({respuesta: 'No se encontro la evaluacion fisica'})
        
        res.status(200).json(evaluacion)
    } catch (error) {
        res.status(500).json({error: 'error al obtener la evaluacion fisica'})
        
    }
}

export const updateEvaluacionFisica = async (req: Request, res:Response) => {
    try {
        const evaluacion = await serv.updateEvaluacionFisica(req.body,req.params.id);

        if(!evaluacion) res.status(404).json({respuesta: errorMessages.ERROR_404_EVALUACION_FISICA })
        
    } catch (error) {
        res.status(500).json({error: 'Ha habido un errror al actualizar la evaluacion fisica'});
    }
}
export const deleteEvaluacion = async (req: Request, res: Response) => {
    try {
        const evaluacion  = await serv.deleteEvaluacion(req.params.id);
        if(!evaluacion) return res.status(404).json({respuesta: 'No se encontro a evaluacion fisica'});
        res.status(200).json({respuesta: 'Se elimino la evaluacion fisica correctamente'});
    } catch (error) {
        res.status(500).json({error: 'Ha habido un errror al eliminar la evaluacion fisica'});
    }
    
}

