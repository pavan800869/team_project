// app_server/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotelModel');

// GET request to fetch and display reviews
router.get('/reviews', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.render('reviews', { hotels });
  } catch (err) {
    console.error('Error fetching hotels:', err);
    res.status(500).send('Error fetching hotel reviews');
  }
});

module.exports = router;
