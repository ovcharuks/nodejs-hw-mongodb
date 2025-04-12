import createHttpError from 'http-errors';
import {
  createContact,
  deleteContact,
  getAllContacts,
  getOneContactById,
  // replaceContact,
  updateContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';

export const getContacts = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const response = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user._id,
  });

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: response,
  });
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const contact = await getOneContactById(id, userId);
  if (contact === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.send({
    status: 200,
    message: `Successfully found contact with id ${contact.id}!`,
    data: contact,
  });
};

export const deleteContactController = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const result = await deleteContact(id, userId);
  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.send(204);
};

export const createContactController = async (req, res) => {
  const contact = req.body;
  const userId = req.user._id;
  const result = await createContact(contact, userId);

  console.log('result', result);
  console.log('contact', contact);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: result,
  });
};

export const replaceContactController = async (req, res) => {
  const { id } = req.params;
  const contact = req.body;
  const userId = req.user._id;
  const result = await updateContact(
    { _id: id, userId },
    { ...contact, userId },
    { upsert: true },
  );
  const status = result.isNew ? 201 : 200;
  return res.status(status).json({
    status: status,
    message: 'Contact upserted succesfully',
    data: result.contact,
  });
};

export const updateContactController = async (req, res) => {
  const { id } = req.params;
  const contact = req.body;
  const userId = req.user._id;

  const result = await updateContact({ _id: id, userId }, contact);

  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.contact,
  });
};

export const patchContactController = async (req, res, next) => {
  const { id } = req.params;
  const photo = req.file;
  let photoUrl;

  if (photo) {
    if (getEnvVar('ENABLE_CLOUDINARY') === 'true') {
      photoUrl = await saveFileToCloudinary(photo);
    } else {
      photoUrl = await saveFileToUploadDir(photo);
    }
  }

  const result = await updateContact(studentId, {
    ...req.body,
    photo: photoUrl,
  });

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: result.contact,
  });
  /* в photo лежить обʼєкт файлу
		{
		  fieldname: 'photo',
		  originalname: 'download.jpeg',
		  encoding: '7bit',
		  mimetype: 'image/jpeg',
		  destination: '/Users/borysmeshkov/Projects/goit-study/students-app/temp',
		  filename: '1710709919677_download.jpeg',
		  path: '/Users/borysmeshkov/Projects/goit-study/students-app/temp/1710709919677_download.jpeg',
		  size: 7
	  }
	*/

  /* Інший код контролеру */
};
