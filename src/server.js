import 'dotenv/config';
import express from 'express';
import contactRoutes from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = 3000;
const app = express();
const router = express.Router();

export const setupServer = () => {
  app.use('/contacts', contactRoutes);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Mongo connection successfully established!`);
  });
};

export default router;
