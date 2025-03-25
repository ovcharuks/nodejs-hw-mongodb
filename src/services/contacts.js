import Contact from '../models/contacts.js';

export const getAllContacts = () => {
  return Contact.find();
};

export const getOneContactById = (contactId) => {
  return Contact.findById(contactId);
};

export const deleteContact = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
};

export const createContact = async (contact) => {
  return Contact.create(contact);
};

export const replaceContact = async (contactId, contact) => {
  const result = await Contact.findByIdAndUpdate(contactId, contact, {
    new: true,
    upsert: true,
    includeResultMetadata: true,
  });
  return {
    value: result.value,
    updatedExisting: result.lastErrorObject.updatedExisting,
  };
};

export const updateContact = async (contactId, contact) => {
  return Contact.findByIdAndUpdate(contactId, contact, { new: true });
};
