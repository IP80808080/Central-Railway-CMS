const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../model/userModel");

passport.use(
  new LocalStrategy(
    {
      usernameField: "uid", // Change usernameField to "uid"
      passwordField: "password",
    },
    async (uid, password, done) => {
      try {
        const user = await User.findOne({ uid }); // Find user by uid
        // UID does NOT exist
        if (!user) {
          return done(null, false, {
            message: "UID not registered", // Adjust message
          });
        }
        // UID exists, verify password
        const isMatch = await user.isValidPassword(password);
        return isMatch
          ? done(null, user)
          : done(null, false, { message: "Incorrect ID/password" });
      } catch (error) {
        done(error);
      }
    }
  )
);

// Serialization and deserialization remain the same
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
