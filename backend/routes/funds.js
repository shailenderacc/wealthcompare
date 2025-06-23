const express = require('express');
const Fund = require('../models/Fund');
const router = express.Router();

router.get('/', async (req, res) => {
  const funds = await Fund.find();
  res.json(funds);
});

router.get('/:id', async (req, res) => {
  const fund = await Fund.findById(req.params.id);
  if (!fund) return res.status(404).send('Fund not found');
  res.json(fund);
});

module.exports = router;