const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/', hotelController.getHotels);
router.get('/:id', hotelController.getHotelById);  // Route for individual hotel

module.exports = router;
