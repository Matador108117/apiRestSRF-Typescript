import { Request, Response } from 'express';
import { AvancesService } from '../services/avances.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';

const serv = new AvancesService();

export const getAllAvances = async (req: Request, res: Response) => {
  try {
    const avances = await serv.getAllAvances();
    if (avances.length > 0) return res.status(200).json(avances);
    return res.status(404).json({ respuesta: errorMessages.NO_AVANCES_EXIST });
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_GET_AVANCES });
  }
};

export const createAvance = async (req: Request, res: Response) => {
  try {
    const avance = await serv.createAvance(req.body);
    return res.status(201).json(avance);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_AVANCE });
  }
};

export const getAvanceById = async (req: Request, res: Response) => {
  try {
    const avance = await serv.getAvanceById(req.params.id);
    if (!avance) return res.status(404).json({ respuesta: errorMessages.ERROR_404_AVANCE });
    return res.status(200).json(avance);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_GET_AVANCES });
  }
};

export const updateAvance = async (req: Request, res: Response) => {
  try {
    const avance = await serv.updateAvance(req.body, req.params.id);
    if (!avance) return res.status(404).json({ respuesta: errorMessages.ERROR_404_AVANCE });
    return res.status(200).json(avance);
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_AVANCE });
  }
};

export const deleteAvance = async (req: Request, res: Response) => {
  try {
    const deleted = await serv.deleteAvance(req.params.id);
    if (!deleted) return res.status(404).json({ respuesta: errorMessages.ERROR_404_AVANCE });
    return res.status(200).json({ respuesta: errorMessages.OK_200_DELETE_AVANCE });
  } catch (error) {
    return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_AVANCE });
  }
};
