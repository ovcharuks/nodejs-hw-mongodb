import { Router } from 'express';
import { getContactById, getContacts } from '../services/contacts.js';

const router = Router();

export default router;
export const contactsRouter = () => {
  router.get('/contacts', getContacts);

  router.get('/contacts/:id', getContactById);
};
