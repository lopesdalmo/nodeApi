const express = require('express');
const authMiddleware = require('../middlewares/auth');
	
const router = express.Router();

const Project = require('../models/project');
const Task = require('../models/task');

router.use(authMiddleware);

router.get('/', async (req, res) => {
  res.send({ userId: req.userId });
});

router.get('/:projectId', async (req, res) => {
  res.send({ userId: req.userId });
});

router.post('/', async (req, res) => {
  res.send({ userId: req.userId });
});

router.put('/:projectId', async (req, res) => {
  res.send({ userId: req.userId });
});

router.delete('/:projectId', async (req, res) => {
  res.send({ userId: req.userId });
});

module.exports = app => app.use('/projects', router);