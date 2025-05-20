import { Request, Response } from 'express';
import { RutinasService } from '../services/rutinas.service.js';

const serv = new RutinasService();

export const getAllRutinas = async (req: Request, res: Response) => {
  try {
    const rutinas = await serv.getAllRutinas();
    if (rutinas.length > 0) return res.status(200).json(rutinas);
    return res.status(404).json({ respuesta: 'No hay rutinas registradas' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al recuperar rutinas' });
  }
};

export const createRutina = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.createRutina(req.body);
    return res.status(200).json(rutina);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la rutina' });
  }
};

export const getRutinaById = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.getRutinaById(req.params.id);
    if (!rutina) return res.status(404).json({ respuesta: 'No se encontró la rutina' });
    return res.status(200).json(rutina);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la rutina' });
  }
};

export const updateRutina = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.updateRutina(req.body, req.params.id);
    if (!rutina) return res.status(404).json({ respuesta: 'No se encontró la rutina' });
    return res.status(200).json(rutina);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la rutina' });
  }
};

export const deleteRutina = async (req: Request, res: Response) => {
  try {
    const deleted = await serv.deleteRutina(req.params.id);
    if (!deleted) return res.status(404).json({ respuesta: 'No se encontró la rutina' });
    return res.status(200).json({ respuesta: 'Rutina eliminada correctamente' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la rutina' });
  }
};
