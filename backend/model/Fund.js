const mongoose = require('mongoose');

const fundSchema = new mongoose.Schema({
  name: String,
  category: String,
  fundHouse: String,
  riskLevel: String,
  expenseRatio: Number,
  historicalReturns: Object,
});

module.exports = mongoose.model('Fund', fundSchema);