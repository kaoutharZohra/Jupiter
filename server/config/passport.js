var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//const GoogleStrategy = require('passport-google-oauth20').Strategy;

var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(username, password, done) {
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            // Return if user not found in database
            if (!user) {
                return done(null, false, {
                    message: 'User not found'
                });
            }
            // Return if password is wrong
            if (!user.validPassword(password)) {
                return done(null, false, {
                    message: 'Password is wrong'
                });
            }
            // If credentials are correct, return the user object
            return done(null, user);
        });
    }
));
/*

function extractProfile (profile) {
    let imageUrl = '';
    if (profile.photos && profile.photos.length) {
        imageUrl = profile.photos[0].value;
    }
    return {
        id: profile.id,
        displayName: profile.displayName,
        image: imageUrl
    };
}

// Configure the Google strategy for use by Passport.js.
//
// OAuth 2-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Google API on the user's behalf,
// along with the user's profile. The function must invoke `cb` with a user
// object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new GoogleStrategy({
    clientID: config.get('OAUTH2_CLIENT_ID'),
    clientSecret: config.get('OAUTH2_CLIENT_SECRET'),
    callbackURL: config.get('OAUTH2_CALLBACK'),
    accessType: 'offline'
}, (accessToken, refreshToken, profile, cb) => {
    // Extract the minimal profile information we need from the profile object
    // provided by Google
    cb(null, extractProfile(profile));
}));

passport.serializeUser((user, cb) => {
    cb(null, user);
});
passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});*/