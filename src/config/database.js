'use strict';
const mongoose = require('mongoose');
const config = require('./index');
const logger = require('./logger');

async function connectDatabase() {
  mongoose.set('strictQuery', true);

  await mongoose.connect(config.database.uri);
  logger.info('MongoDB connected');
}

async function disconnectDatabase() {
  await mongoose.connection.close();
  logger.info('MongoDB disconnected');
}

module.exports = { connectDatabase, disconnectDatabase };
