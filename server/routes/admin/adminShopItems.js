const express = require('express');
const {
  addShopItem,
  updateShopItem,
  removeShopItem,
} = require('../../controllers/admin/adminShopItemsController');
const router = express.Router();

// Shop item routes
router.post('/', addShopItem);
router.patch('/:id', updateShopItem);
router.delete('/:id', removeShopItem);

module.exports = router;
