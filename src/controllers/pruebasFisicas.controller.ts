import { Request, Response } from 'express';
import { PruebasFisicasService } from '../services/pruebasFisicas.service.js';

const serv = new PruebasFisicasService();

export const getAllPruebasFisicas = async (req: Request, res: Response) => {
  try {
    const pruebas = await serv.getAll();
    if (pruebas.length > 0) return res.status(200).json(pruebas);
    return res.status(404).json({ mensaje: 'No hay pruebas físicas registradas' });
  } catch {
    return res.status(500).json({ error: 'Error al obtener pruebas físicas' });
  }
};

export const getPruebaFisicaById = async (req: Request, res: Response) => {
  try {
    const prueba = await serv.getById(req.params.id);
    if (!prueba) return res.status(404).json({ mensaje: 'No se encontró la prueba física' });
    return res.status(200).json(prueba);
  } catch {
    return res.status(500).json({ error: 'Error al obtener la prueba física' });
  }
};

export const createPruebaFisica = async (req: Request, res: Response) => {
  try {
    const nueva = await serv.create(req.body);
    return res.status(201).json(nueva);
  } catch {
    return res.status(500).json({ error: 'Error al crear prueba física' });
  }
};

export const updatePruebaFisica = async (req: Request, res: Response) => {
  try {
    const actualizada = await serv.update(req.body, req.params.id);
    if (!actualizada) return res.status(404).json({ mensaje: 'No se encontró la prueba física' });
    return res.status(200).json(actualizada);
  } catch {
    return res.status(500).json({ error: 'Error al actualizar la prueba física' });
  }
};

export const deletePruebaFisica = async (req: Request, res: Response) => {
  try {
    const eliminada = await serv.delete(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: 'No se encontró la prueba física' });
    return res.status(200).json({ mensaje: 'Prueba física eliminada correctamente' });
  } catch {
    return res.status(500).json({ error: 'Error al eliminar la prueba física' });
  }
};
