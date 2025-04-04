import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/user.controller.js';
import { validationMiddleware } from '../middlewares/user.validation.js';
import { FituserDto } from '../dtos/user.dto.js';

const router = Router();
router.get('/users', getAllUsers);
router.post('/users', validationMiddleware(FituserDto), createUser);

export default router;
