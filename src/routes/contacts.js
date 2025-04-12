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
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { contactSchema, updateContactSchema } from '../validation/contact.js';
import { upload } from '../middlewares/multer.js';

const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getContacts));

router.get('/:id', isValidId, ctrlWrapper(getContactById));

router.delete('/:id', isValidId, ctrlWrapper(deleteContactController));

router.post(
  '/',
  jsonParser,
  validateBody(contactSchema),
  ctrlWrapper(createContactController),
);

router.put(
  '/:id',
  isValidId,
  jsonParser,
  validateBody(contactSchema),
  ctrlWrapper(replaceContactController),
);

router.patch(
  '/:id',
  isValidId,
  jsonParser,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

router.put(
  '/:studentId',
  // checkRoles(ROLES.TEACHER),
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(replaceContactController),
);

router.patch(
  '/:studentId',
  // checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(replaceContactController),
);
// router.get('/', ctrlWrapper(getContacts));
export default router;
