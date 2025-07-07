const mongoose = require('mongoose');

const pencilSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  color: String,
  type: String,
  isNew: Boolean,
  price: Number
});

module.exports = mongoose.model('Pencil', pencilSchema);