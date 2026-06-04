'use strict';
const NodeCache = require('node-cache');
const config = require('../config');
const logger = require('../config/logger');

class CacheService {
  constructor() {
    this._cache = new NodeCache({
      stdTTL: config.cache.ttl,
      checkperiod: Math.round(config.cache.ttl * 0.2),
      useClones: false,
    });
    this._cache.on('expired', (key) => logger.debug(`Cache expired: ${key}`));
    logger.info(`Cache initialised — TTL ${config.cache.ttl}s`);
  }

  get(key) {
    const value = this._cache.get(key);
    logger.debug(value !== undefined ? `Cache HIT: ${key}` : `Cache MISS: ${key}`);
    return value;
  }

  set(key, value, ttl) {
    return ttl != null ? this._cache.set(key, value, ttl) : this._cache.set(key, value);
  }

  del(key) { return this._cache.del(key); }
  flush() { this._cache.flushAll(); logger.info('Cache flushed'); }
  stats() { return this._cache.getStats(); }

  async getOrSet(key, fetchFn, ttl) {
    const cached = this.get(key);
    if (cached !== undefined) return cached;
    const fresh = await fetchFn();
    this.set(key, fresh, ttl);
    return fresh;
  }
}

module.exports = new CacheService();