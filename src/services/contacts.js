import Contact from '../models/contacts.js';

export const getAllContacts = () => {
  return Contact.find();
};

export const getOneContactById = (studentId) => {
  return Contact.findById(studentId);
};
