const express = require('express');
const dotenv = require('dotenv');

const cors = require('cors');
const passport = require('passport');

const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);


// Configs
const db = require('./config/mysqlorm.config');

// Routes


// Middleware
const verifyTimeRange = require('./middleware/verifyTimeRange');
const sessionStore = new SequelizeStore({
  db: db.sequelize,
});

// Initialize Express app
const app = express();

// Middleware
//app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.use(express.json({ type: ['application/json', 'application/scim+json'] }));
app.set('trust proxy',1);
// Session configuration
app.use(
  session({
    name: 'loginmedichain',
   proxy: true,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: 'nhhgh',
    cookie: {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 10,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax', 
    },
  })
);
sessionStore.sync();
const authController = require('./controllers/auth.controllers');
// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

require('./utils/strategy')(passport); // Import Passport strategies



// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/auth', authRoute);


db.sequelize
  .authenticate()
  .then(() => {
    logger.info('Database connection has been established successfully.');

    // Start the server
    app.listen(process.env.PORT, () => {
      logger.info(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    logger.warn('Unable to connect to the database:', err);
  });

module.exports = app;