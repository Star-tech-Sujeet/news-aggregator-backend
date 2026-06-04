'use strict';
const { Router } = require('express');
const controller = require('../controllers/news.controller');

const router = Router();

router.get('/', controller.getLatestNews);
router.get('/search', controller.searchNews);          // ← must be before /:category
router.get('/category/:category', controller.getNewsByCategory);
router.get('/cache/stats', controller.getCacheStats);
router.delete('/cache', controller.flushCache);

module.exports = router;