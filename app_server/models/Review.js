const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    comment: { type: String, required: true },
});
module.exports = mongoose.model('Review', reviewSchema);
