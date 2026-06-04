'use strict';
const newsService = require('../services/news.service');
const cacheService = require('../services/cache.service');
const config = require('../config');
const logger = require('../config/logger');

function handleError(res, err) {
  logger.error(`Controller error: ${err.message}`);
  return res.status(err.statusCode || 500).json({
    success: false,
    error: { message: err.apiMessage || err.message || 'Internal server error', code: err.statusCode || 500 },
  });
}

function parsePagination(query) {
  return {
    pageSize: Math.min(parseInt(query.pageSize, 10) || config.news.defaultPageSize, 100),
    page: Math.max(parseInt(query.page, 10) || 1, 1),
  };
}

async function getLatestNews(req, res) {
  try {
    const { pageSize, page } = parsePagination(req.query);
    const country = req.query.country || config.news.defaultCountry;
    const result = await cacheService.getOrSet(
      `headlines:${country}:${pageSize}:${page}`,
      () => newsService.getTopHeadlines({ country, pageSize, page })
    );
    res.status(200).json({ success: true, totalResults: result.totalResults, count: result.articles.length, articles: result.articles });
  } catch (err) { handleError(res, err); }
}

async function getNewsByCategory(req, res) {
  try {
    const normCategory = req.params.category.toLowerCase().trim();
    if (!config.news.validCategories.includes(normCategory)) {
      return res.status(400).json({
        success: false,
        error: { message: `Invalid category. Valid options: ${config.news.validCategories.join(', ')}`, code: 400 },
      });
    }
    const { pageSize, page } = parsePagination(req.query);
    const country = req.query.country || config.news.defaultCountry;
    const result = await cacheService.getOrSet(
      `category:${normCategory}:${country}:${pageSize}:${page}`,
      () => newsService.getNewsByCategory(normCategory, { country, pageSize, page })
    );
    res.status(200).json({ success: true, category: normCategory, totalResults: result.totalResults, count: result.articles.length, articles: result.articles });
  } catch (err) { handleError(res, err); }
}

async function searchNews(req, res) {
  try {
    const query = (req.query.q || '').trim();
    if (!query) return res.status(400).json({ success: false, error: { message: '"q" query parameter is required.', code: 400 } });
    if (query.length > 500) return res.status(400).json({ success: false, error: { message: 'Query must not exceed 500 characters.', code: 400 } });
    const { pageSize, page } = parsePagination(req.query);
    const sortBy = ['relevancy', 'popularity', 'publishedAt'].includes(req.query.sortBy) ? req.query.sortBy : 'publishedAt';
    const result = await cacheService.getOrSet(
      `search:${query.toLowerCase()}:${pageSize}:${page}:${sortBy}`,
      () => newsService.searchNews(query, { pageSize, page, sortBy }),
      300 // shorter TTL for searches
    );
    res.status(200).json({ success: true, query, sortBy, totalResults: result.totalResults, count: result.articles.length, articles: result.articles });
  } catch (err) { handleError(res, err); }
}

function getCacheStats(_req, res) { res.status(200).json({ success: true, stats: cacheService.stats() }); }
function flushCache(_req, res) { cacheService.flush(); res.status(200).json({ success: true, message: 'Cache cleared.' }); }

module.exports = { getLatestNews, getNewsByCategory, searchNews, getCacheStats, flushCache };