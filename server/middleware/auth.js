const userSchema = require("../model/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const createHttpError = require("http-errors");

/** auth middleware */
const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ error: "Access denied, no token provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  protect,
};
