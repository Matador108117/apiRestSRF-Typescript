import { Sequelize } from 'sequelize-typescript';
import { Fituser } from '../../models/user.model.js';
import { Notificacion } from '../../models/notificaciones.model.js';
import * as dotenv from 'dotenv';
import { EvaluacionesFisica } from '../../models/evaluacionesFisicas.model.js';
import { Prueba_fisica } from '../../models/pruebasFisicas.model.js';
import { associate } from './associate.js';
dotenv.config();
export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    models: [Fituser, Notificacion, EvaluacionesFisica, Prueba_fisica],
    dialectOptions: {
        ssl: false
    }
});
associate();
