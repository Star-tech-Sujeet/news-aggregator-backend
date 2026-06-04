'use strict';
const mongoose = require('mongoose');
const Task = require('../models/task.model');

function normalizeText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validateTaskPayload(body) {
  const title = normalizeText(body.title);
  const description = normalizeText(body.description);
  const errors = [];

  if (!title) {
    errors.push('Title is required.');
  }

  if (title.length > 120) {
    errors.push('Title must be 120 characters or fewer.');
  }

  if (description.length > 1000) {
    errors.push('Description must be 1000 characters or fewer.');
  }

  if (body.completed !== undefined && typeof body.completed !== 'boolean') {
    errors.push('Completed must be a boolean value.');
  }

  return {
    errors,
    data: {
      title,
      description,
      completed: body.completed === true,
    },
  };
}

async function getTasks(_req, res, next) {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
}

async function createTask(req, res, next) {
  try {
    const { errors, data } = validateTaskPayload(req.body || {});

    if (errors.length) {
      return res.status(400).json({ success: false, error: { message: errors.join(' '), code: 400 } });
    }

    const task = await Task.create(data);
    return res.status(201).json({ success: true, data: task });
  } catch (error) {
    return next(error);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: { message: 'Invalid task id.', code: 400 } });
    }

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ success: false, error: { message: 'Task not found.', code: 404 } });
    }

    return res.status(200).json({ success: true, data: task });
  } catch (error) {
    return next(error);
  }
}

async function updateTask(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ success: false, error: { message: 'Invalid task id.', code: 400 } });
    }

    if (typeof req.body.completed !== 'boolean') {
      return res.status(400).json({ success: false, error: { message: 'Completed must be a boolean value.', code: 400 } });
    }

    const task = await Task.findByIdAndUpdate(id, { completed: req.body.completed }, { new: true });

    if (!task) {
      return res.status(404).json({ success: false, error: { message: 'Task not found.', code: 404 } });
    }

    return res.status(200).json({ success: true, data: task });
  } catch (error) {
    return next(error);
  }
}

module.exports = { getTasks, createTask, deleteTask, updateTask };
