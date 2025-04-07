import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
// import contactRoutes from './routers/contacts.js';
import router from './routes/index.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = 3000;
const app = express();
// const router = express.Router();

export const setupServer = () => {
  app.use(express.json());
  // app.use(cors());
  app.use(cookieParser());
  // app.use('/contacts', contactRoutes);
  app.use(router);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Mongo connection successfully established!`);
  });
};

// export default router;
