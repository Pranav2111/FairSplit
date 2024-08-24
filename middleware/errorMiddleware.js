const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(JSON.stringify(err.stack));

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
};

module.exports = errorHandler;
