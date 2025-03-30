import Contact from '../models/contacts.js';

export const getAllContacts = async ({
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
}) => {
  const skip = page > 0 ? (page - 1) * perPage : 0;
  const contactQuery = Contact.find();
  if (typeof filter !== 'undefined') {
    contactQuery.where('type');
  }
  const [total, contacts] = await Promise.all([
    Contact.countDocuments(contactQuery),
    Contact.find()
      // contactQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(perPage),
  ]);
  const totalPages = Math.ceil(total / perPage);

  return {
    contacts,
    page,
    perPage,
    total,
    totalPages,
    hasNextPage: totalPages - page > 0,
    hasPreviousPage: page > 1,
  };
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
