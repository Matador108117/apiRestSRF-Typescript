import { Router } from 'express';
import { getAllUsers, createUser, getUserById, deleteUser, updateUser, getUserNotificationsById } from '../controllers/user.controller.js';
import { validationUserIn } from '../middlewares/user.validation.js';
import { FituserDto } from '../dtos/User/user.dto.js';
import { createNotificacion, deleteNotification, getallNotificaciones, getNotifiacionByid, updateNotification } from '../controllers/notificaciones.controller.js';
import { validationNotifiacionesIn } from '../middlewares/notificaciones.validation.js';
import { NotificacionesDTOin } from '../dtos/notificaciones/notificaciones.dto.in.js';

import { getAllAvances, createAvance } from '../controllers/avances.controller.js';
import { validationAvancesIn } from '../middlewares/avances.validation.js';
import { AvancesDTOIn } from '../dtos/avances/avances.dto.in.js';

import { createEvaluacionFisica, deleteEvaluacion, getAllEvaluacionesFisicas, getEvalucacionFisicaById, updateEvaluacionFisica } from '../controllers/evaluaciones_fisicas.controller.js';
import { validationEvaluacionesFisicas } from '../middlewares/evaluaciones_fisicas.validation.js';
import { EvaluacionesFisicasDTOin } from '../dtos/evaluacionesFisicas/evaluacionesFisicas.dto.in.js';


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
router.put('/notifications/:id',validationNotifiacionesIn(NotificacionesDTOin),updateNotification);
router.delete('/notifications/:id', deleteNotification)

//evaluaciones fisicas

router.get('/physicalEvaluations', getAllEvaluacionesFisicas);
router.post('/physicalEvaluations', validationEvaluacionesFisicas(EvaluacionesFisicasDTOin), createEvaluacionFisica);
router.get('/physicalEvaluations/:id', getEvalucacionFisicaById);
router.put('/physicalEvaluations/:id', validationEvaluacionesFisicas(EvaluacionesFisicasDTOin), updateEvaluacionFisica );
router.delete('/physicalEvaluations/:id', deleteEvaluacion);



// Rutas de avances
router.get('/avances', getAllAvances);
router.post('/avances', validationAvancesIn(AvancesDTOIn), createAvance);

export default router;
