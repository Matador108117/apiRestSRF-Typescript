
import { PruebasFisicasService } from "../services/pruebasFisicas.service.js";
import { errorMessages } from "../configs/SharedMessages.enum.js";
import { Request, Response } from "express";
const servicePruebas = new PruebasFisicasService();
export const getAllPruebasFiscas = async (req: Request, res: Response) => {
    try {
        const pruebas = await servicePruebas.getAllPruebasFisicas();
        if (pruebas.length > 0) {
            return res.status(200).json(pruebas)
        } else {
            return res.status(404).json({ respuesta: errorMessages.NO_PROOF_EXIST });
        }
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_PROOF })
    }
}
export const createPruebaFisica = async (req: Request, res: Response) => {
    try {
        const prueba = await servicePruebas.createPruebaFisica(req.body);
        if (!prueba) return res.status(404).json({ respuesta: errorMessages.ERROR_404_EVALUACION_FISICA });
        return res.status(200).json(prueba);
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_PROOF });
    }
}
export const getPruebaFisicaById = async (req: Request, res: Response) => {
    try {
        const prueba = await servicePruebas.getaPruebaFisicaById(req.params.id);
        if (!prueba) return res.status(404).json({ respuesta: errorMessages.ERROR_404_PROOF })
        return res.status(200).json(prueba)
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_PROOF })
    }
}
export const updatePruebaFisica = async (req: Request, res: Response) => {
    try {
        const prueba = await servicePruebas.updatePruebaFisicas(req.body, req.params.id);
        if (!prueba) return res.status(404).json({ respuesta: errorMessages.ERROR_404_PROOF })
        return res.status(200).json({})
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_PROOF });
    }
}
export const deletePrueba = async (req: Request, res: Response) => {
    try {
        const prueba = await servicePruebas.deletePrueba(req.params.id);
        if (!prueba) return res.status(404).json({ respuesta: errorMessages.ERROR_404_PROOF });
        return res.status(200).json({ respuesta: errorMessages.OK_200_DELETE_PROOF });
    } catch (error) {
        return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_PROOF });
    }
}