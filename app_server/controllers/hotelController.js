// controllers/hotelController.js
const Hotel = require('../models/hotelModel');

// Controller to handle booking route
exports.getBookingPage = async (req, res) => {
  try {
    const hotelId = req.params.id; 
    const hotel = await Hotel.findById(hotelId); // Assuming hotels are stored in MongoDB with an ID
    
    if (!hotel) {
      return res.status(404).send('Hotel not found');
    }

    res.render('booking', { title: hotel.name, hotel });
  } catch (err) {
    console.error('Error fetching hotel:', err);
    res.status(500).send('Server Error');
  }
};
const Booking = require('../models/bookingModel');

// Function to handle the booking request and save it in the database
exports.createBooking = async (req, res) => {
  const { hotelId } = req.params;
  const { name, checkin, checkout, rooms } = req.body;

  try {
    const newBooking = new Booking({
      hotelId,
      name,
      checkin,
      checkout,
      rooms,
    });

    await newBooking.save(); // Save booking to the database

    res.redirect('/'); // Redirect to home after successful booking
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).send('An error occurred while processing your booking.');
  }
};
