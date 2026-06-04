'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const config = require('./config');
const logger = require('./config/logger');
const newsRoutes = require('./routes/news.routes');
const taskRoutes = require('./routes/tasks.routes');
const { newsRateLimiter, searchRateLimiter } = require('./middleware/rateLimiter');
const { notFound, globalErrorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(cors({ origin: config.cors.origin, methods: ['GET', 'POST', 'PATCH', 'DELETE'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :response-time ms', { stream: { write: msg => logger.http(msg.trim()) } }));

// Serve frontend from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/health', (_req, res) => res.status(200).json({ status: 'ok', uptime: process.uptime() }));

// Rate limiting: stricter on search, general on everything else
app.use('/news/search', searchRateLimiter);
app.use('/news', newsRateLimiter, newsRoutes);
app.use('/api/tasks', taskRoutes);

app.use(notFound);
app.use(globalErrorHandler);

module.exports = app;
