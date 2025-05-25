import { Request, Response } from 'express';
import { RutinasService } from '../services/rutinas.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';

const serv = new RutinasService();

export const getAllRutinas = async (req: Request, res: Response) => {
  try {
    const rutinas = await serv.getAllRutinas();
    if (rutinas.length > 0) return res.status(200).json(rutinas);
    return res.status(404).json({ respuesta: errorMessages.NO_RUTINAS_EXIST });
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_GET_RUTINAS });
  }
};

export const createRutina = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.createRutina(req.body);
    return res.status(200).json(rutina);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_RUTINA });
  }
};

export const getRutinaById = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.getRutinaById(req.params.id);
    if (!rutina) return res.status(404).json({ respuesta: errorMessages.ERROR_404_RUTINA });
    return res.status(200).json(rutina);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_GET_RUTINAS });
  }
};

export const updateRutina = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.updateRutina(req.body, req.params.id);
    if (!rutina) return res.status(404).json({ respuesta: errorMessages.ERROR_404_RUTINA });
    return res.status(200).json(rutina);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_RUTINA });
  }
};

export const deleteRutina = async (req: Request, res: Response) => {
  try {
    const deleted = await serv.deleteRutina(req.params.id);
    if (!deleted) return res.status(404).json({ respuesta: errorMessages.ERROR_404_RUTINA });
    return res.status(200).json({ respuesta: errorMessages.OK_200_DELETE_RUTINA });
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_RUTINA });
  }
};

