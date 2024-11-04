const express = require("express");
const dotenv = require("dotenv");

const cors = require("cors");
const passport = require("passport");
const Multer = require('multer');
const session = require("express-session");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: `${__dirname}/.env` });
} else {
  dotenv.config({ path: `${__dirname}/.env.local` });
}
// Configs
const db = require("./config/mysqlorm.config");
const minioClient = require("./config/minio.config");
// Routes
const authRoute = require("./routes/auth.routes");
const docAuthRoute = require("./routes/docauth.routes");
const docMethodRoute = require("./routes/doctor_method.routes");
const userMethodRoute = require("./routes/user_method.routes");
const fileUploadRoute = require("./routes/file.routes");
// Middleware
const checkSessionUser = require("./middlewere/checkUser");

const sessionStore = new SequelizeStore({
  db: db.sequelize,
});

// Initialize Express app
const app = express();

// Middleware
//app.use(helmet());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json({ type: ["application/json", "application/scim+json"] }));
app.set("trust proxy", 1);
// Session configuration
app.use(
  session({
    name: "loginmedichain",
    proxy: true,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: "nhhgh",
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 10,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
    },
  })
);
sessionStore.sync();
// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Import Passport strategies

require("./utils/strategy")(passport);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoute);
app.use("/api/doctor_auth", docAuthRoute);
app.use("/api/doctor_methods", docMethodRoute);
app.use("/api/user_methods", checkSessionUser, userMethodRoute);
const multer = Multer({ storage: Multer.memoryStorage() });

app.use("/api/uploads", multer.single('profile'), fileUploadRoute);


(async () => {
  try {
    const isBucketExists = await minioClient.bucketExists(
      "profilepicsmedichain"
    );

    if (!isBucketExists) {
      await minioClient.makeBucket("profilepicsmedichain", "us-east-1");
      console.log("Profile pics bucket created successfully");
    }
    console.log("Buckets exist/created");
  } catch (err) {
    console.log(err);
  }
})();



db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

module.exports = app;
