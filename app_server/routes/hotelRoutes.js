
const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');


router.get('/booking/:id', hotelController.getBookingPage);
router.post('/booking/:hotelId', hotelController.createBooking);

module.exports = router;
