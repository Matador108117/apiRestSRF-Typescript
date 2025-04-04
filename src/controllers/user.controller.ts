import { Request, Response } from 'express';
import { Fituser} from '../models/user.model.js';
import { plainToInstance } from 'class-transformer';
import { FituserDto } from '../dtos/user.dto.js';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const fitusers = await Fituser.findAll();
    const fitusersdto = fitusers.map( user =>
      plainToInstance(FituserDto , user.toJSON(), {
        excludeExtraneousValues: true,
      })
    );
    res.json(fitusersdto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newFituser = await Fituser.create(req.body);
    const userDto = plainToInstance(FituserDto, newFituser.toJSON(), {
      excludeExtraneousValues: true,
    });
    res.status(201).json(userDto);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};


