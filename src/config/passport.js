const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/User');

passport.use(new LocalStrategy({usernameField: 'email'}, 
    async (email, password, done) => {
    try {
        const user = await User.findOne({ where: { email }});
        // if condition compare password and user name
        if (!user || !(await bcrypt.compare(password, user.passwordHash))){
            return done(null, false);
        } else {
            // return null if user doesn't exists

            return done(null, user);
        }

        
        
    } catch (err) {
        
        return done(err);

    }
    
}));

// serialize User

passport.serializeUser((user, done) => done(null, user.id));

// deserialize user
passport.deserializeUser(async (id, done) => {
    try { 
        done(null, await User.findByPk(id)); 
    }
    catch (err){
        done(err);
    }
});

module.exports = passport;
