import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';
export const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (isValidId !== true) {
    return next(createHttpError.BadRequest('ID is not valid'));
  }
  console.log(id);

  next();
};
