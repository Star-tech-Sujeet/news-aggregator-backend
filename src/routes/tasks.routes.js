'use strict';
const { Router } = require('express');
const controller = require('../controllers/tasks.controller');

const router = Router();

router.get('/', controller.getTasks);
router.post('/', controller.createTask);
router.patch('/:id', controller.updateTask);
router.delete('/:id', controller.deleteTask);

module.exports = router;
