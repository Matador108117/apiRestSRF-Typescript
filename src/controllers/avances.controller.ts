// src/controllers/avances.controller.ts
import { Request, Response } from 'express';
import { AvancesService } from '../services/avances.service.js';

const avancesService = new AvancesService();

// Obtener todos los avances
export const getAllAvances = async (req: Request, res: Response) => {
  try {
    const avances = await avancesService.getAllAvances();
    if (avances.length > 0) {
      res.status(200).json(avances);
    } else {
      res.status(404).json({ message: 'No hay avances registrados' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener avances' });
  }
};

// Crear un nuevo avance
export const createAvance = async (req: Request, res: Response) => {
  try {
    const newAvance = await avancesService.createAvance(req.body);
    res.status(201).json(newAvance);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear avance' });
  }
};
