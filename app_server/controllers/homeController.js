// controllers/homeController.js
const Hotel = require('../models/hotelModel'); 


exports.getHomePage = async (req, res) => {
  try {

    const hotels = await Hotel.find({});
    console.log(hotels);
    res.render('index', { title: 'Hotel Management System', hotels });
  } catch (err) {
    console.error('Error fetching hotels:', err);
    res.status(500).send('Server Error');
  }
};
exports.createHotel = async (req, res) => {
    try {
        const { _id, name, image, description, rating, reviews } = req.body; // Get the values from req.body

        // Validate required fields
        if (!_id || !name || !image || !description || !rating) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newHotel = new Hotel({
            _id,
            name,
            image,
            description,
            rating,
            reviews
        });

        // Save the hotel to the database
        await newHotel.save();
        res.redirect('/');
        // return res.status(201).json({ message: 'Hotel created successfully', hotel: newHotel });

    } catch (error) {
        console.error('Error creating hotel:', error);
        return res.status(500).json({ message: 'Error creating hotel', error });
    }
};

exports.getAboutPage = (req, res) => {
  res.render('about', { title: 'Hotel Management System' });
};
