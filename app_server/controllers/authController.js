const User = require("../models/user");

exports.signup = (req, res) => {
    res.render('signup');
};

exports.login = (req, res) => {
    res.render('login');
};

exports.postSignup = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.redirect('/login');
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (user) {
        req.session.user = user;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
};
