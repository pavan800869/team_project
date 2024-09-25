const Hotel = require('../models/hotel');

exports.getHotels = async (req, res) => {
    const hotels = await Hotel.find({});
    res.render('index', { hotels });
};

exports.getHotelById = async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    res.render('hotel', { hotel });
};
