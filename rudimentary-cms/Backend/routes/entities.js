// routes/entities.js
const express = require('express');
const router = express.Router();
const Entity = require('../models/Entity');

// Create entity
router.post('/', async (req, res) => {
  try {
    const { name, attributes } = req.body;
    const entity = await Entity.create({ name, attributes });
    res.status(201).json(entity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Other CRUD routes (GET, PUT, DELETE)

module.exports = router;
