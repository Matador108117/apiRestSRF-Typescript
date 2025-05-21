import { Request, Response, NextFunction } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const validationPruebasFisicas = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToInstance(dtoClass, req.body);
    const errors = await validate(dto);
    if (errors.length > 0) {
      return res.status(400).json({
        message: 'Datos no válidos',
        errors: errors.map(e => e.constraints),
      });
    }
    next();
  };
};
