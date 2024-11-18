const Inventory = require('../models/inventoryModel');

exports.retreiveAllItems = (req, res) => {
  Inventory.getAllItems((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

exports.retreiveItemById = (req, res) => {
  const id = req.params.id;
  Inventory.getItemById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(results[0]);
  });
};

exports.addItem = (req, res) => {
  const newItem = req.body;
  Inventory.addItem(newItem, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Item added successfully', id: results.insertId });
  });
};

exports.updateItem = (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  Inventory.updateItem(id, updatedItem, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Item information updated successfully!' });
  });
};

exports.removeItem = (req, res) => {
  const id = req.params.id;
  Inventory.removeItem(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: 'Item removed successfully!' });
  });
};
