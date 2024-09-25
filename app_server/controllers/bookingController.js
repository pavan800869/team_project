const Booking = require('../models/booking');

exports.bookHotel = async (req, res) => {
    const { hotelId, userId, date } = req.body;
    const booking = new Booking({ hotelId, userId, date });
    await booking.save();
    res.redirect('/booking');
};

exports.getBookingPage = (req, res) => {
    const hotelId = req.params.id;
    res.render('booking', { hotelId });
};
