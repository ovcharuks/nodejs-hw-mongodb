import 'dotenv/config';
import express from 'express';
import contactRoutes from './routers/contacts.js';

const PORT = 3000;
const app = express();
const router = express.Router();
export const setupServer = () => {
  router.use('/contacts', contactRoutes);

  app.listen(PORT, () => {
    console.log(`Mongo connection successfully established!`);
  });
};

export default router;
