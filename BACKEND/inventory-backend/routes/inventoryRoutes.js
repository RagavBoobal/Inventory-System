// routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/', inventoryController.retreiveAllItems);
router.get('/:id', inventoryController.retreiveItemById);
router.post('/', inventoryController.addItem);
router.put('/:id', inventoryController.updateItem);
router.delete('/:id', inventoryController.removeItem);

module.exports = router;
