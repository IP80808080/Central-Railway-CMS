const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const session = require("express-session");
const { logger } = require("./middleware/logger");
const { roles } = require("./utils/constant");
const passport = require("passport");
const { ensureLoggedIn } = require("connect-ensure-login");

app.use(logger);

// import routes
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const { errorHandlerd, errorHandlera } = require("./middleware/errorHandler");

//database connection
mongoose
  .connect(process.env.MONGODB_TOKEN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB not connected", err));

//MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default-secret", // Use the environment variable or a default value
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: true,
      httpOnly: true,
    },
  })
);

// For Passport JS Authentication
app.use(passport.initialize());
app.use(passport.session());
require("./utils/passport");

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: false,
  })
);

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://Backend-CMS.onrender.com"],
  })
);

//ROUTES MIDDLEWARE
// app.get('/', (req, res) => {
//     res.send("Hello from Node Js");
// })
app.use("/", authRoutes);

// error middleware
app.use(errorHandlera);
app.use(errorHandlerd);

//port
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
