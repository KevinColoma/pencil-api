const Pencil = require('../models/Pencil');

exports.createPencil = async (req, res) => {
  try {
    const pencil = new Pencil(req.body);
    await pencil.save();
    res.status(201).json(pencil);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPencils = async (req, res) => {
  const pencils = await Pencil.find();
  res.json(pencils);
};

exports.updatePencil = async (req, res) => {
  try {
    const updated = await Pencil.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePencil = async (req, res) => {
  await Pencil.findByIdAndDelete(req.params.id);
  res.json({ message: 'Pencil deleted' });
};

exports.searchPencil = async (req, res) => {
  const query = req.query;
  const results = await Pencil.find(query);
  res.json(results);
};