const LocalStrategy = require("passport-local").Strategy;
const OpenIDConnectStrategy = require("passport-openidconnect").Strategy;
const checkCredentials = require("../utils/checkCredentials");
const jwt = require("jsonwebtoken");
module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  // OpenID Connect Strategy
  passport.use(
    new OpenIDConnectStrategy(
      {
        issuer: process.env.OPENID_ISSUER,
        authorizationURL: process.env.OPENID_AUTHORIZATION_URL,
        tokenURL: process.env.OPENID_TOKEN_URL,
        userInfoURL: process.env.OPENID_USER_INFO_URL,
        clientID: process.env.OPENID_CLIENT_ID,
        clientSecret: process.env.OPENID_CLIENT_SECRET,
        callbackURL: process.env.OPENID_CALLBACK_URL,
        scope: "openid profile email",
      },
      (
        issuer,
        req,
        profile,
        context,
        idToken,
        accessToken,
        refreshToken,
        params,
        done
      ) => {
        console.log("profile", profile);
        console.log(accessToken, idToken, profile);

        done(null, profile, accessToken, idToken);
      }
    )
  );

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (username, password, done) => {
        try {
          const user = await checkCredentials(username, password);
          if (user) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Incorrect username or password.",
            });
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );
};
