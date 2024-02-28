const jwt = require("jsonwebtoken");
const { roles } = require("../utils/constant");

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).json({ error: "Forbidden - Admin access required" });
  }
};

const isModerator = (req, res, next) => {
  if (req.user && req.user.role === "moderator") {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).json({ error: "Forbidden - Moderator access required" });
  }
};

const isAuthenticated = (req, res, next) => {
  // Check if the user is authenticated (has a valid token)
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = {
  isAdmin,
  isModerator,
  isAuthenticated,
};
