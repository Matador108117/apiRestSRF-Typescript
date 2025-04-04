import express from 'express';
import dotenv from 'dotenv';
import router from '../routes/Router.js';
import { sequelize } from '../database/config/database.js';
// rama release
dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

startServer();

