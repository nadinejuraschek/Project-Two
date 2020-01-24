const authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/login', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/index',
        failureRedirect: '/signup'
        }
    ));

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/index',
        failureRedirect: '/login'
    }));

    app.get('/index',isLoggedIn, authController.index);

    app.get('/logout',authController.logout);
    
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    };

};