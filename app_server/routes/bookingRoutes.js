const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/:id', bookingController.getBookingPage);  // Get specific hotel booking page
router.post('/booking', bookingController.bookHotel);

module.exports = router;
