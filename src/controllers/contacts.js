import { getAllContacts, getOneContactById } from '../services/contacts.js';

export const getContacts = async (req, res, next) => {
  const contacts = await getAllContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
  next();
};

export const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await getOneContactById(id);
  // if (contact === null) {
  //   return res.status(404).send({
  //     message: 'Contact not found',
  //   });
  // }
  res.send({
    status: 200,
    message: `Successfully found contact with id ${contact.id}!`,
    data: contact,
  });
};
