const express = require('express');
const Fund = require('../models/Fund');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/:fundId', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  const fund = await Fund.findById(req.params.fundId);

  if (!fund) return res.status(404).send("Fund not found");

  if (!user.watchlist.includes(fund._id)) {
    user.watchlist.push(fund._id);
    await user.save();
  }

  res.json(user.watchlist);
});

router.get('/', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).populate('watchlist');
  res.json(user.watchlist);
});

module.exports = router;