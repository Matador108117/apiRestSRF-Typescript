import { Request, Response } from 'express';
import { UsuarioRutinasService } from '../services/usuarioRutinas.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';

const serv = new UsuarioRutinasService();

export const getAllUsuarioRutinas = async (req: Request, res: Response) => {
  try {
    const rutinas = await serv.getAll();
    if (rutinas.length > 0) return res.status(200).json(rutinas);
    return res.status(404).json({ mensaje: errorMessages.NO_USUARIO_RUTINAS_EXIST });
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_GET_USUARIO_RUTINA });
  }
};

export const getUsuarioRutinaById = async (req: Request, res: Response) => {
  try {
    const rutina = await serv.getById(req.params.id);
    if (!rutina) return res.status(404).json({ mensaje: errorMessages.ERROR_404_USUARIO_RUTINA });
    return res.status(200).json(rutina);
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_GET_USUARIO_RUTINA });
  }
};

export const createUsuarioRutina = async (req: Request, res: Response) => {
  try {
    const nueva = await serv.create(req.body);
    return res.status(201).json(nueva);
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_USUARIO_RUTINA });
  }
};

export const updateUsuarioRutina = async (req: Request, res: Response) => {
  try {
    const actualizada = await serv.update(req.body, req.params.id);
    if (!actualizada) return res.status(404).json({ mensaje: errorMessages.ERROR_404_USUARIO_RUTINA });
    return res.status(200).json(actualizada);
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_USUARIO_RUTINA });
  }
};

export const deleteUsuarioRutina = async (req: Request, res: Response) => {
  try {
    const eliminada = await serv.delete(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: errorMessages.ERROR_404_USUARIO_RUTINA });
    return res.status(200).json({ mensaje: errorMessages.OK_200_DELETE_USUARIO_RUTINA });
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_USUARIO_RUTINA });
  }
};
