const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  hotelId: { type: Number, ref: 'Hotel', required: true },
  name: { type: String, required: true },
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  rooms: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
