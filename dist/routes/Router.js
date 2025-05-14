import { Router } from 'express';
import { getAllUsers, createUser, getUserById, deleteUser, updateUser, getUserNotificationsById, getUserEvaluationsById, getUserEvaluationsProofsById } from '../controllers/user.controller.js';
import { validationUserIn } from '../middlewares/user.validation.js';
import { FituserDto } from '../dtos/User/user.dto.js';
import { createNotificacion, deleteNotification, getallNotificaciones, getNotifiacionByid, updateNotification } from '../controllers/notificaciones.controller.js';
import { validationNotifiacionesIn } from '../middlewares/notificaciones.validation.js';
import { NotificacionesDTOin } from '../dtos/notificaciones/notificaciones.dto.in.js';
import { createEvaluacionFisica, deleteEvaluacion, getAllEvaluacionesFisicas, getEvalucacionFisicaById, getPruebasByEvaluacionId, updateEvaluacionFisica } from '../controllers/evaluaciones_fisicas.controller.js';
import { validationEvaluacionesFisicas } from '../middlewares/evaluaciones_fisicas.validation.js';
import { EvaluacionesFisicasDTOin } from '../dtos/evaluacionesFisicas/evaluacionesFisicas.dto.in.js';
import { createPruebaFisica, deletePrueba, getAllPruebasFiscas, getPruebaFisicaById, updatePruebaFisica } from '../controllers/pruebas.controller.js';
import { validationPruebas } from '../middlewares/pruebas.validation.js';
import { PruebasFisicasDTOin } from '../dtos/pruebasFisicas/PruebasFisicasDTOin.js';
const router = Router();
// fitUser
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.delete('/users/:id', deleteUser);
router.post('/users', validationUserIn(FituserDto), createUser);
router.put('/users/:id', validationUserIn(FituserDto), updateUser);
router.get('/users/notifications/:id', getUserNotificationsById);
router.get('/users/evaluations/:id', getUserEvaluationsById);
router.get('/users/evaluations/proofs/:id', getUserEvaluationsProofsById);
// notifications
router.get('/notifications', getallNotificaciones);
router.get('/notifications/:id', getNotifiacionByid);
router.post('/notifications', validationNotifiacionesIn(NotificacionesDTOin), createNotificacion);
router.put('/notifications/:id', validationNotifiacionesIn(NotificacionesDTOin), updateNotification);
router.delete('/notifications/:id', deleteNotification);
//evaluaciones fisicas
router.get('/physicalEvaluations', getAllEvaluacionesFisicas);
router.post('/physicalEvaluations', validationEvaluacionesFisicas(EvaluacionesFisicasDTOin), createEvaluacionFisica);
router.get('/physicalEvaluations/:id', getEvalucacionFisicaById);
router.put('/physicalEvaluations/:id', validationEvaluacionesFisicas(EvaluacionesFisicasDTOin), updateEvaluacionFisica);
router.delete('/physicalEvaluations/:id', deleteEvaluacion);
router.get('/physicalEvaluations/proofs/:id', getPruebasByEvaluacionId);
//Pruebas fisicas
router.get('/proofs/:id', getPruebaFisicaById);
router.get('/proofs', getAllPruebasFiscas);
router.post('/proofs', validationPruebas(PruebasFisicasDTOin), createPruebaFisica);
router.put('/proofs/:id', validationPruebas(PruebasFisicasDTOin), updatePruebaFisica);
router.delete('/proofs/:id', deletePrueba);
export default router;
