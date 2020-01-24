require("dotenv").config();
const   express = require("express"),
        ejs     = require("ejs");

const db = require("./models");

const app = express();

const   passport   = require('passport'),
        session    = require('express-session');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTES
var authRoute = require('./routes/auth.js')(app, passport);
require('./config/passport/passport.js')(passport, db.user);

// PASSPORT
app.use(session({ secret: 'education',resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// EJS
app.set("view engine", "ejs");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;