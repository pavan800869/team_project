const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
    const reviews = await Review.find({});
    res.render('reviews', { reviews });
};
