import { Request, Response } from 'express';
import { AvancesService } from '../services/avances.service.js';

const serv = new AvancesService();

export const getAllAvances = async (req: Request, res: Response) => {
  try {
    const avances = await serv.getAllAvances();
    if (avances.length > 0) return res.status(200).json(avances);
    return res.status(404).json({ respuesta: 'No hay avances registrados' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al recuperar avances' });
  }
};

export const createAvance = async (req: Request, res: Response) => {
  try {
    const avance = await serv.createAvance(req.body);
    return res.status(201).json(avance);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el avance' });
  }
};

export const getAvanceById = async (req: Request, res: Response) => {
  try {
    const avance = await serv.getAvanceById(req.params.id);
    if (!avance) return res.status(404).json({ respuesta: 'No se encontró el avance' });
    return res.status(200).json(avance);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el avance' });
  }
};

export const updateAvance = async (req: Request, res: Response) => {
  try {
    const avance = await serv.updateAvance(req.body, req.params.id);
    if (!avance) return res.status(404).json({ respuesta: 'No se encontró el avance' });
    return res.status(200).json(avance);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el avance' });
  }
};

export const deleteAvance = async (req: Request, res: Response) => {
  try {
    const deleted = await serv.deleteAvance(req.params.id);
    if (!deleted) return res.status(404).json({ respuesta: 'No se encontró el avance' });
    return res.status(200).json({ respuesta: 'Avance eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el avance' });
  }
};
