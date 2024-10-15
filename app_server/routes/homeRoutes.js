// routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Home page route
router.get('/', homeController.getHomePage);

router.get('/createHotel', (req, res) => {
    res.render('createHotel', { title: 'Create New Hotel' });
  });
// About page route
router.get('/about', homeController.getAboutPage);

router.post('/create', homeController.createHotel);
module.exports = router;
