const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

// Set up database
mongoose.connect('mongodb://localhost:27017/hotelManagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
mongoose.connection.on('connected', () => {
    console.log('connected');
  });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'yourSecret', resave: false, saveUninitialized: true }));


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');


const authRoutes = require('./app_server/routes/authRoutes');

const home = require('./app_server/routes/index');

app.use('/', home);

app.use('/auth', authRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;