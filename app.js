const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Set up database
mongoose.connect('mongodb://localhost/hotel-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'yourSecret', resave: false, saveUninitialized: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// Routes
const authRoutes = require('./app_server/routes/authRoutes');
const hotelRoutes = require('./app_server/routes/hotelRoutes');
const reviewRoutes = require('./app_server/routes/reviewRoutes');
const bookingRoutes = require('./app_server/routes/bookingRoutes');
const home = require('./app_server/routes/index');

app.use('/', home);
app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/reviews', reviewRoutes);
app.use('/booking', bookingRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;