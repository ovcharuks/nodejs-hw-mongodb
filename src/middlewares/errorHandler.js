export const errorHandler = (err, _req, res, _next) => {
  //   console.error(err);
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
