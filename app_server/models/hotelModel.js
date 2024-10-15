// models/hotelModel.js
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    _id: { type: Number, required: [true, "Enter id: "]},
  name: { type: String, required: [true, "Enter name: "] },
  image: { type: String, required: [true, "Enter image path: "] },
  description: { type: String, required: [true, "Enter description: "]},
  rating: { type: String, required: [true, "Enter rating: "]},
  reviews: [String],
});

module.exports = mongoose.model('Hotel', hotelSchema);
