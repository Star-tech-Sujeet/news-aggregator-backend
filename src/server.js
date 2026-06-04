'use strict';
const app = require('./app');
const config = require('./config');
const logger = require('./config/logger');
const { connectDatabase, disconnectDatabase } = require('./config/database');

let server;

async function startServer() {
  await connectDatabase();

  server = app.listen(config.server.port, () => {
    logger.info(`API running on http://localhost:${config.server.port}`);
  });
}

function shutdown(signal) {
  logger.info(`${signal} - shutting down`);

  if (!server) {
    process.exit(0);
  }

  server.close(async () => {
    await disconnectDatabase();
    logger.info('Server closed');
    process.exit(0);
  });

  setTimeout(() => process.exit(1), 10_000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
process.on('unhandledRejection', (reason) => logger.error('Unhandled rejection:', reason));
process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception:', error);
  process.exit(1);
});

startServer().catch((error) => {
  logger.error('Failed to start server:', error);
  process.exit(1);
});

module.exports = server;
