import dotenv from 'dotenv';
import 'dotenv/config';
import express from 'express';
import Student from './models/contacts.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import pino from 'pino-http';
import cors from 'cors';

import { getContactById, getContacts } from './services/contacts.js';

const PORT = 3000;

export const setupServer = () => {
  const app = express();

  app.get('/contacts', getContacts);

  app.get('/contacts/:id', getContactById);

  app.use((req, res, next) => {
    res.status(404).send('Not found');
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something not');
  });

  app.listen(PORT, () => {
    console.log(`Mongo connection successfully established!`);
  });
};
