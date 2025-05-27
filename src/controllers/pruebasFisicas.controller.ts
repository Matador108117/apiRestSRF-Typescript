import { Request, Response } from 'express';
import { PruebasFisicasService } from '../services/pruebasFisicas.service.js';
import { errorMessages } from '../configs/SharedMessages.enum.js';

const serv = new PruebasFisicasService();

export const getAllPruebasFisicas = async (req: Request, res: Response) => {
  try {
    const pruebas = await serv.getAllPruebasFisicas();
    if (pruebas.length > 0) return res.status(200).json(pruebas);
    return res.status(404).json({ mensaje: errorMessages.NO_PROOF_EXIST_PRUEBAS });
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_PRUEBAS });
  }
};

export const getPruebaFisicaById = async (req: Request, res: Response) => {
  try {
    const prueba = await serv.getaPruebaFisicaById(req.params.id);
    if (!prueba) return res.status(404).json({ mensaje: errorMessages.ERROR_404_PRUEBAS });
    return res.status(200).json(prueba);
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_PRUEBAS });
  }
};

export const createPruebaFisica = async (req: Request, res: Response) => {
  try {
    const nueva = await serv.createPruebaFisica(req.body);
    return res.status(201).json(nueva);
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_CREATE_PRUEBAS });
  }
};

export const updatePruebaFisica = async (req: Request, res: Response) => {
  try {
    const actualizada = await serv.updatePruebaFisicas(req.body, req.params.id);
    if (!actualizada) return res.status(404).json({ mensaje: errorMessages.ERROR_404_PRUEBAS });
    return res.status(200).json(actualizada);
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_UPDATE_PRUEBAS });
  }
};

export const deletePruebaFisica = async (req: Request, res: Response) => {
  try {
    const eliminada = await serv.deletePrueba(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: errorMessages.ERROR_404_PRUEBAS });
    return res.status(200).json({ mensaje: errorMessages.OK_200_DELETE_PRUEBAS });
  } catch {
    return res.status(500).json({ error: errorMessages.ERROR_500_DELETE_PRUEBAS });
  }
};
