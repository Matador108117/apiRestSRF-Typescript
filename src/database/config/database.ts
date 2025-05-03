import { Sequelize } from 'sequelize-typescript';
import { Fituser } from '../../models/user.model.js';
import * as dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [Fituser],
  dialectOptions: {
    ssl: false
  }
});
