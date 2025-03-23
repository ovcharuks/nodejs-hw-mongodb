import express from 'express';
import { getContactById, getContacts } from '../controllers/contacts.js';
const router = express.Router();

router.get('/', getContacts);

router.get('/:id', getContactById);

export default router;
