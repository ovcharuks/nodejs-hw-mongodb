import createHttpError from 'http-errors';
import {
  createContact,
  deleteContact,
  getAllContacts,
  getOneContactById,
  replaceContact,
  updateContact,
} from '../services/contacts.js';

export const getContacts = async (req, res) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await getOneContactById(id);
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
  const result = await deleteContact(id);
  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.send(204);
};

export const createContactController = async (req, res) => {
  const contact = req.body;
  const result = await createContact(contact);

  console.log(result);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: result,
  });
};

export const replaceContactController = async (req, res) => {
  const { id } = req.params;
  const contact = req.body;
  const result = await replaceContact(id, contact);

  if (result.updatedExisting === true) {
    return res.json({ message: 'Contact updeted succesfully', data: result });
  }
  return res.status(201).json({
    status: 201,
    message: 'Contact created succesfully',
    data: result.value,
  });
};

export const updateContactController = async (req, res) => {
  const { id } = req.params;
  const contact = req.body;

  const result = await updateContact(id, contact);

  if (result === null) {
    throw new createHttpError.NotFound('Contact not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
};
