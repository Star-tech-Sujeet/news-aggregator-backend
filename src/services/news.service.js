'use strict';
const axios = require('axios');
const config = require('../config');
const logger = require('../config/logger');

const apiClient = axios.create({
  baseURL: config.newsApi.baseUrl,
  timeout: 10_000,
  headers: { 'X-Api-Key': config.newsApi.key, Accept: 'application/json' },
});

// Normalise Axios errors into human-readable messages
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response) {
      const { status, data } = err.response;
      err.statusCode = status;
      err.apiMessage = data?.message || 'NewsAPI returned an error';
      if (status === 401) err.apiMessage = 'Invalid or missing NewsAPI key.';
      else if (status === 429) err.apiMessage = 'NewsAPI rate limit exceeded.';
      else if (status === 426) err.apiMessage = 'Upgrade your NewsAPI plan for server-side access.';
    } else if (err.code === 'ECONNABORTED') {
      err.statusCode = 504; err.apiMessage = 'Request to NewsAPI timed out.';
    } else {
      err.statusCode = 503; err.apiMessage = 'Unable to reach NewsAPI.';
    }
    return Promise.reject(err);
  }
);

// Strip each article to only the fields the UI needs
function normaliseArticle(raw) {
  return {
    title: raw.title || null,
    description: raw.description || null,
    url: raw.url || null,
    urlToImage: raw.urlToImage || null,
    source: raw.source?.name || null,
    publishedAt: raw.publishedAt || null,
  };
}

function isValidArticle(a) {
  return a.title && a.title !== '[Removed]' && a.url && a.url !== 'https://removed.com';
}

async function getTopHeadlines({ country, pageSize, page } = {}) {
  logger.info('NewsAPI → /top-headlines');
  const { data } = await apiClient.get('/top-headlines', {
    params: { country: country || config.news.defaultCountry, pageSize, page },
  });
  return { totalResults: data.totalResults || 0, articles: (data.articles || []).filter(isValidArticle).map(normaliseArticle) };
}

async function getNewsByCategory(category, { country, pageSize, page } = {}) {
  logger.info(`NewsAPI → /top-headlines?category=${category}`);
  const { data } = await apiClient.get('/top-headlines', {
    params: { category, country: country || config.news.defaultCountry, pageSize, page },
  });
  return { totalResults: data.totalResults || 0, articles: (data.articles || []).filter(isValidArticle).map(normaliseArticle) };
}

async function searchNews(query, { pageSize, page, sortBy } = {}) {
  logger.info(`NewsAPI → /everything?q=${query}`);
  const { data } = await apiClient.get('/everything', {
    params: { q: query, language: config.news.defaultLanguage, pageSize, page, sortBy: sortBy || 'publishedAt' },
  });
  return { totalResults: data.totalResults || 0, articles: (data.articles || []).filter(isValidArticle).map(normaliseArticle) };
}

module.exports = { getTopHeadlines, getNewsByCategory, searchNews };