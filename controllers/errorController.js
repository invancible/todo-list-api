module.exports = (err, req, res, next) => {
  const status = err.status || 'error';
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: status,
    message: err.message,
  });
};
