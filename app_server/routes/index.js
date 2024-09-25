const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Home - Hotel Management System' });
});

// Booking page route (for hotel 1, 2, 3)
router.get('/booking/:id', (req, res) => {
  const hotelId = req.params.id;
  res.render('booking', { hotelId, title: `Book Hotel ${hotelId}` });
});

module.exports = router;
