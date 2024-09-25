const mongoose = require('mongoose');
const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    image: { type: String, required: true },  // URL or local path to hotel image
});
module.exports = mongoose.model('Hotel', hotelSchema);
