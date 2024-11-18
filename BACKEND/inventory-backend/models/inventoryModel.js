const connection = require('../dbConnection');

const getAllItems = (callback) => {
  connection.query('SELECT * FROM inventoryItems', callback);
};

const getItemById = (id, callback) => {
  connection.query('SELECT * FROM inventoryItems WHERE id = ?', [id], callback);
};

const addItem = (item, callback) => {
  connection.query('INSERT INTO inventoryItems SET ?', item, callback);
};

const updateItem = (id, item, callback) => {
  connection.query('UPDATE inventoryItems SET ? WHERE id = ?', [item, id], callback);
};

const removeItem = (id, callback) => {
  connection.query('DELETE FROM inventoryItems WHERE id = ?', [id], callback);
};

module.exports = { getAllItems, getItemById, addItem, updateItem, removeItem };
