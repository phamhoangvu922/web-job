const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const pool = require('./connection');
const passport = require('passport');

passport.use('user-local', new LocalStrategy(
    {
        usernameField : 'email',
        passwordField : 'password'
    },function (username, password, done) {
        console.log(username);
        console.log(password);

        pool.query('SELECT * FROM "users"  WHERE "email"=' + '\'' + username + '\'', function (err, user) {
            if (err) { return done(err); }
            if (!user.rows[0]) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            if (user.rows[0] !== undefined) {
                console.log(user.rows[0])
                bcrypt.compare(password, user.rows[0].password, function (err, res) {
                    if (err) {
                        return console.log(err);
                    }
                    if (res) {
                        return done(null, user);
                    }
                    else {
                        return done(null, false, { message: 'Incorrect password.' });
                    }
                });
            }
        });
    }
));

// Serialize
passport.serializeUser(function (user, done) {
    done(null, user.rows[0].email);
});
  // Deserialize
passport.deserializeUser(function (email, done) {
    pool.query('SELECT * FROM "users"  WHERE "email"='+ '\'' + email +'\'', function(err, user) {
        done(err, user.rows[0].email);
        });
  });

module.exports = passport;

