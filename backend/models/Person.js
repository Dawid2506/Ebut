const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number
});

module.exports = mongoose.model('Person', personSchema);