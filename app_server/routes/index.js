const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Hotel Management System' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'Hotel Management System' });
  });
//booking page
  const hotels = [
    { id: 1, name: "Hotel Sunshine", image: "/images/hotel1.jpg", reviews: ["Amazing stay!", "Excellent service"] },
    { id: 2, name: "Hotel Moonlight", image: "/images/hotel2.jpg", reviews: ["Loved the ambiance!", "Cozy and peaceful"] },
    { id: 3, name: "Seaside Resort", image: "/images/hotel3.jpg", reviews: ["Beautiful views!", "Great hospitality"] },
    { id: 4, name: "Hotel Trident", image: "/images/hotel4.jpg", reviews: ["Beautiful views!", "Great care"] }
  ];
  
  // Booking route
  router.get('/booking/:id', (req, res) => {
    const hotelId = parseInt(req.params.id); 
    const hotel = hotels.find(h => h.id === hotelId);  
    console.log(`Hotel ID: ${hotelId}`);  
    console.log(`Hotel Object:`, hotel);  
  
    if (hotel) {
      res.render('booking', { title: hotel.name, hotel });
    } else {
      res.status(404).send("Hotel not found");
    }
  });

module.exports = router;
