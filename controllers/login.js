const logInService = require('../models/loginService');
const passport = require('../passport');


module.exports.logIn = (req, res, next) => {
    let announce = '';
    res.render('login', {announce, username: req.user, isLogin: req.isAuthenticated()});
}

module.exports.submitLogIn = async (req, res, next) => {
    console.log("toi day");
    passport.authenticate('user-local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            let announce = 'Tài khoản hoặc mật khẩu không chính xác';
            return res.render("login", {announce});
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            else {
                res.redirect('/');
            }
        });
    })(req, res, next);
}
