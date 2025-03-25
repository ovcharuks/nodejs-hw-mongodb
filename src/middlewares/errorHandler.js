import createHttpError from 'http-errors';

export const errorHandler = (err, _req, res, _next) => {
  if (createHttpError.isHttpError(err) === true) {
    return res
      .status(err.status)
      .json({ status: res.status, message: err.message });
  }
  console.error(err);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
