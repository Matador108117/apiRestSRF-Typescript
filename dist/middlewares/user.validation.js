import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
export const validationMiddleware = (dtoClass) => {
    return async (req, res, next) => {
        const dtoInstance = plainToInstance(dtoClass, req.body);
        const errors = await validate(dtoInstance);
        if (errors.length > 0) {
            return res.status(400).json({
                message: 'Datos no válidos',
                errors: errors.map(err => err.constraints),
            });
        }
        next();
    };
};
