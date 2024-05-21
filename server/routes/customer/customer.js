const express = require('express');
const router = express.Router();
const cartRoutes = require('./cart');
const customerAuthRoutes = require('../auth/customerAuth');

const {
  handleCheckout,
  getCustomerOrders,
  getCustomerProfile,
  updateCustomerProfile,
  changePassword,
} = require('../../controllers/customerController');

// customer cart routes
router.use('/cart', cartRoutes);

// customer functionalities routes
router.post('/checkout', handleCheckout);
router.get('/orders', getCustomerOrders);
router.get('/profile', getCustomerProfile);
router.put('/profile', updateCustomerProfile);
router.put('/profile/change-password', changePassword);

module.exports = router;
