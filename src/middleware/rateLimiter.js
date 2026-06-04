'use strict';
const rateLimit = require('express-rate-limit');
const config = require('../config');
const logger = require('../config/logger');

const newsRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  handler(req, res) {
    logger.warn(`Rate limit exceeded: ${req.ip}`);
    res.status(429).json({ success: false, error: { message: 'Too many requests. Please slow down.', code: 429 } });
  },
});

const searchRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  handler(req, res) {
    res.status(429).json({ success: false, error: { message: 'Too many search requests.', code: 429 } });
  },
});

module.exports = { newsRateLimiter, searchRateLimiter };