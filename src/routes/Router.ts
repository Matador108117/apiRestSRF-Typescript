import { Router } from 'express';
import { login } from '../controllers/login.auth.controller.js';
import { LoginDto } from '../dtos/authentification/authDTO.js';


import { getAllUsers, createUser, getUserById, deleteUser, updateUser, getUserNotificationsById, getUserEvaluationsById, getUserEvaluationsProofsById } from '../controllers/user.controller.js';
import { validationUserIn } from '../middlewares/user.validation.js';
import { FituserDto } from '../dtos/User/user.dto.js';
import { createNotificacion, deleteNotification, getallNotificaciones, getNotifiacionByid, updateNotification } from '../controllers/notificaciones.controller.js';
import { validationNotifiacionesIn } from '../middlewares/notificaciones.validation.js';
import { NotificacionesDTOin } from '../dtos/notificaciones/notificaciones.dto.in.js';

import { createAvance, getAllAvances, getAvanceById, updateAvance, deleteAvance} from '../controllers/avances.controller.js';
import { validationAvancesIn } from '../middlewares/avances.validation.js';
import { AvancesDTOIn } from '../dtos/avances/avances.dto.in.js';



import { createEvaluacionFisica, deleteEvaluacion, getAllEvaluacionesFisicas, getEvalucacionFisicaById, updateEvaluacionFisica } from '../controllers/evaluaciones_fisicas.controller.js';
import { validationEvaluacionesFisicas } from '../middlewares/evaluaciones_fisicas.validation.js';
import { EvaluacionesFisicasDTOin } from '../dtos/evaluacionesFisicas/evaluacionesFisicas.dto.in.js';

import { createRutina, getAllRutinas, getRutinaById, updateRutina, deleteRutina } from '../controllers/rutinas.controller.js';
import { validationRutinasIn } from '../middlewares/rutinas.validation.js';
import { RutinaDTOIn } from '../dtos/rutinas/rutinas.dto.in.js';

import { createPruebaFisica, deletePruebaFisica, getAllPruebasFisicas, getPruebaFisicaById, updatePruebaFisica } from '../controllers/pruebasFisicas.controller.js';
import { validationPruebasFisicas } from '../middlewares/pruebasFisicas.validation.js';
import { PruebaFisicaDTOIn } from '../dtos/pruebasFisicas/pruebasFisicas.dto.in.js';

import { createUsuarioRutina, getAllUsuarioRutinas, getUsuarioRutinaById, updateUsuarioRutina, deleteUsuarioRutina } from '../controllers/usuarioRutinas.controller.js';
import { validationUsuarioRutinasIn } from '../middlewares/usuarioRutinas.validation.js';
import { UsuarioRutinaDTOIn } from '../dtos/usuarioRutinas/usuarioRutinas.dto.in.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';

const router = Router();
// fitUser
router.get('/users', authenticateToken,getAllUsers);
router.get('/users/:id',authenticateToken, getUserById);
router.delete('/users/:id', deleteUser);
router.post('/users', validationUserIn(FituserDto), createUser);
router.put('/users/:id',authenticateToken, validationUserIn(FituserDto), updateUser);
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

// Rutas de rutinas 
router.get('/rutinas', getAllRutinas);
router.get('/rutinas/:id', getRutinaById);
router.post('/rutinas', validationRutinasIn(RutinaDTOIn), createRutina);
router.put('/rutinas/:id', validationRutinasIn(RutinaDTOIn), updateRutina);
router.delete('/rutinas/:id', deleteRutina);


// Rutas de avances
router.get('/avances', getAllAvances);
router.get('/avances/:id', getAvanceById);
router.post('/avances', validationAvancesIn(AvancesDTOIn), createAvance);
router.put('/avances/:id', validationAvancesIn(AvancesDTOIn), updateAvance);
router.delete('/avances/:id', deleteAvance);

//Rutas de pruebas fisicas 

router.get('/pruebasFisicas', getAllPruebasFisicas);
router.get('/pruebasFisicas/:id', getPruebaFisicaById);
router.post('/pruebasFisicas', validationPruebasFisicas(PruebaFisicaDTOIn), createPruebaFisica);
router.put('/pruebasFisicas/:id', validationPruebasFisicas(PruebaFisicaDTOIn), updatePruebaFisica);
router.delete('/pruebasFisicas/:id', deletePruebaFisica);

//Rutas de usuario rutinas 

router.get('/usuarioRutinas', getAllUsuarioRutinas);
router.get('/usuarioRutinas/:id', getUsuarioRutinaById);
router.post('/usuarioRutinas', validationUsuarioRutinasIn(UsuarioRutinaDTOIn), createUsuarioRutina);
router.put('/usuarioRutinas/:id', validationUsuarioRutinasIn(UsuarioRutinaDTOIn), updateUsuarioRutina);
router.delete('/usuarioRutinas/:id', deleteUsuarioRutina);

// validacion jwt login
router.post('/auth/login', validationUserIn(LoginDto), login);

export default router;
