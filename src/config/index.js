'use strict';
require('dotenv').config();

const config = {
  server: {
    port: parseInt(process.env.PORT, 10) || 5000,
    env: process.env.NODE_ENV || 'development',
  },
  database: {
    uri: process.env.MONGODB_URI || process.env.MONGO_URI,
  },
  newsApi: {
    key: process.env.NEWS_API_KEY,
    baseUrl: process.env.NEWS_API_BASE_URL || 'https://newsapi.org/v2',
  },
  cache: {
    ttl: parseInt(process.env.CACHE_TTL, 10) || 900,
  },
  rateLimit: {
    max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 900000,
  },
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
  },
  news: {
    defaultPageSize: parseInt(process.env.DEFAULT_PAGE_SIZE, 10) || 20,
    defaultCountry: process.env.DEFAULT_COUNTRY || 'us',
    defaultLanguage: process.env.DEFAULT_LANGUAGE || 'en',
    validCategories: [
      'business', 'entertainment', 'general',
      'health', 'science', 'sports', 'technology',
    ],
  },
};

if (!config.newsApi.key) {
  throw new Error('NEWS_API_KEY is not set in your .env file.');
}

if (!config.database.uri) {
  throw new Error('MONGODB_URI is not set in your .env file.');
}

module.exports = config;
