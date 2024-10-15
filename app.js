const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const dbUri = 'mongodb+srv://pavankumarmetla:RU3jPHAADeOdUuPN@contactmanager.oj7jnte.mongodb.net/hotel?retryWrites=true&w=majority&appName=hotelManagement'
// Set up database
mongoose.connect(dbUri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'yourSecret', resave: false, saveUninitialized: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');


const authRoutes = require('./app_server/routes/authRoutes');

const homeRoutes = require('./app_server/routes/homeRoutes');
const hotelRoutes = require('./app_server/routes/hotelRoutes');
const exp = require('constants');

app.use('/', homeRoutes);
app.use('/', hotelRoutes);

app.use('/auth', authRoutes);


const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;