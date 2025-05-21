import { Request, Response } from 'express';
import { UsuarioRutinasService } from '../services/usuarioRutinas.service.js';

const serv = new UsuarioRutinasService();

export const getAllUsuarioRutinas = async (req: Request, res: Response) => {
  try {
    const rutinas = await serv.getAll();
    if (rutinas.length > 0) return res.status(200).json(rutinas);
    return res.status(404).json({ mensaje: 'No hay asignaciones registradas' });
  } catch {
    return res.status(500).json({ error: 'Error al obtener asignaciones' });
  }
};

export const getUsuarioRutinaById = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.getById(req.params.id);
    if (!rutina) return res.status(404).json({ mensaje: 'No se encontró la asignación' });
    return res.status(200).json(rutina);
  } catch {
    return res.status(500).json({ error: 'Error al obtener la asignación' });
  }
};

export const createUsuarioRutina = async (req: Request, res: Response) => {
  try {
    const nueva = await serv.create(req.body);
    return res.status(201).json(nueva);
  } catch {
    return res.status(500).json({ error: 'Error al crear la asignación' });
  }
};

export const updateUsuarioRutina = async (req: Request, res: Response) => {
  try {
    const actualizada = await serv.update(req.body, req.params.id);
    if (!actualizada) return res.status(404).json({ mensaje: 'No se encontró la asignación' });
    return res.status(200).json(actualizada);
  } catch {
    return res.status(500).json({ error: 'Error al actualizar la asignación' });
  }
};

export const deleteUsuarioRutina = async (req: Request, res: Response) => {
  try {
    const eliminada = await serv.delete(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: 'No se encontró la asignación' });
    return res.status(200).json({ mensaje: 'Asignación eliminada correctamente' });
  } catch {
    return res.status(500).json({ error: 'Error al eliminar la asignación' });
  }
};
