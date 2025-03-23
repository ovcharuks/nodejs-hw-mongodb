import express from 'express';
import { getContactById, getContacts } from '../services/contacts.js';
const router = express.Router();

router.get('/', getContacts);

router.get('/:id', getContactById);

router.use((req, res, next) => {
  res.status(404).send('Not found');
});

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something not');
});

export default router;
