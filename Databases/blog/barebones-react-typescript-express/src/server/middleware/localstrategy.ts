import * as passport from 'passport';
import * as LocalStrategy from 'passport-local';

import { ComparePassword } from '../utils/security/passwords';
import db from '../db/';

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
passport.use(new LocalStrategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email, password, done) => {
    try {
        // find by email
        let [user] = await db.authors.findOneByEmail(email);
        // if that email exists and the password the user provides the one matched in the DB
        if (user && ComparePassword(password, user.password)){
            // authenticated
            done(null, user);
        }
        else {
            // authentication failed
            done(null, false);
        }
    } catch (error) {
        // serious error
        done(error);
    }
}));