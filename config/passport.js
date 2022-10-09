const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const User = require("../models/user");
const { mathPass } = require("../helpers/encryp");

passport.use(
  new passportLocal(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("No user");
        return done(null, false, { messague: "No user found" });
      } else {
        const Exist = await mathPass(password, user.password);
        if (Exist) {
          console.log("Existe el usuario");
          return done(null, user);
        } else {
          console.log("Mal contraseña");
          return done(null, false, { massage: "No hay" });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
