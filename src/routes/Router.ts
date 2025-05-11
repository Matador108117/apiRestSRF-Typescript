import { Router } from 'express';
import { getAllUsers, createUser, getUserById, deleteUser, updateUser, getUserNotificationsById } from '../controllers/user.controller.js';
import { validationUserIn } from '../middlewares/user.validation.js';
import { FituserDto } from '../dtos/User/user.dto.js';
import { createNotificacion, getallNotificaciones, getNotifiacionByid } from '../controllers/notificaciones.controller.js';
import { validationNotifiacionesIn } from '../middlewares/notificaciones.validation.js';
import { NotificacionesDTOin } from '../dtos/notificaciones/notificaciones.dto.in.js';
import { getAllAvances, createAvance } from '../controllers/avances.controller.js';
import { validationAvancesIn } from '../middlewares/avances.validation.js';
import { AvancesDTOIn } from '../dtos/avances/avances.dto.in.js';

const router = Router();
// fitUser
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);
router.post('/users', validationUserIn(FituserDto), createUser);
router.put('/users/:id', validationUserIn(FituserDto), updateUser);
router.get('/users/notifications/:id', getUserNotificationsById);

// notifications
router.get('/notifications', getallNotificaciones);
router.get('/notifications/:id',getNotifiacionByid);
router.post('/notifications',validationNotifiacionesIn(NotificacionesDTOin), createNotificacion);

// Rutas de avances
router.get('/avances', getAllAvances);
router.post('/avances', validationAvancesIn(AvancesDTOIn), createAvance);

export default router;
