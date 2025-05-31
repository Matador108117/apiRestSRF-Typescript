import { Router } from 'express';
import { login } from '../controllers/login.auth.controller.js';
import { validationUserIn } from '../middlewares/user.validation.js';
import { LoginDto } from '../dtos/authentification/authDTO.js';
const router = Router();

router.post('/login', validationUserIn(LoginDto), login);

export default router;