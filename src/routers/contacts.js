import express from 'express';
import { getContactById, getContacts } from '../services/contacts.js';
const router = express.Router();

router.get('/', getContacts);

router.get('/:id', getContactById);

export default router;
