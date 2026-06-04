'use strict';
const logger = require('../config/logger');

function notFound(req, res) {
  logger.warn(`404: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ success: false, error: { message: `Route not found: ${req.method} ${req.originalUrl}`, code: 404 } });
}

function globalErrorHandler(err, req, res, _next) {
  const status = err.status || err.statusCode || 500;
  logger.error(`[${status}] ${req.method} ${req.originalUrl} — ${err.message}`);
  res.status(status).json({
    success: false,
    error: {
      message: err.message || 'An unexpected error occurred.',
      code: status,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
}

module.exports = { notFound, globalErrorHandler };