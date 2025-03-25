import express from 'express';
import {
  createContactController,
  deleteContactController,
  getContactById,
  getContacts,
  replaceContactController,
  updateContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getContacts));

router.get('/:id', ctrlWrapper(getContactById));

router.delete('/:id', ctrlWrapper(deleteContactController));

router.post('/', jsonParser, ctrlWrapper(createContactController));

router.put('/:id', jsonParser, ctrlWrapper(replaceContactController));

router.patch('/:id', jsonParser, ctrlWrapper(updateContactController));

export default router;
