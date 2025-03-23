import 'dotenv/config';
import express from 'express';
import contactRoutes from './routers/contacts.js';

const PORT = 3000;
const app = express();
const router = express.Router();

export const setupServer = () => {
  router.use('/contacts', contactRoutes);

  router.use((req, res, next) => {
    res.status(404).send('Not found');
  });

  router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something not');
  });

  app.listen(PORT, () => {
    console.log(`Mongo connection successfully established!`);
  });
};

export default router;
