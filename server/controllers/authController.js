const userSchema = require("../model/userModel");
const { comparePassword, hashPassword } = require("../helper/auth");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { token } = require("morgan");
const passport = require("passport");
const dotenv = require("dotenv").config();

const users = [
  { uid: 1000, role: "admin" },
  { uid: 2000, role: "admin" },
  { uid: 3000, role: "moderator" },
  { uid: 4000, role: "moderator" },
];

exports.signup = async (req, res) => {
  console.log(req.body);
  try {
    const { uid, username, phonenumber, email, password, section } = req.body;

    // Check if Name was Entered
    if (!username) {
      return res.json({
        error: "Name is required",
      });
    }

    // Check if UID was Entered
    if (!uid) {
      return res.json({
        error: "ID is required",
      });
    }

    // Check if Phone Number was Entered
    if (!phonenumber) {
      return res.json({
        error: "Phone number is required",
      });
    }

    // Check if Email was Entered
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }

    // Check if Section was Entered
    if (!section) {
      return res.json({
        error: "Section is required",
      });
    }

    // Check if Password was Entered and meets the criteria
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and must have at least 6 characters",
      });
    }

    const exists = await userSchema.findOne({ email });

    if (exists) {
      return res.json({
        error: "Email already exists",
      });
    }

    // Determine the role based on predefined UIDs or assign 'client' role
    let role = "client";
    const predefinedRoles = users.find((u) => u.uid === parseInt(uid));
    if (predefinedRoles) {
      role = predefinedRoles.role;
    }

    // Create user object and push to users array
    const newUser = await userSchema.create({
      uid: parseInt(uid),
      username,
      phonenumber,
      email,
      password,
      section,
      role,
    });

    const userResponse = { ...newUser.toObject(), role: role };
    // Generate JWT token
    const token = jwt.sign(
      {
        id: newUser.id,
        userId: newUser._id,
        username: newUser.username,
        role: role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Set cookie with token
    res.cookie("token", token, { httpOnly: true });
    res.json({
      success: true,
      user: userResponse,
      token,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.signin = async (req, res) => {
  console.log(req.body);

  try {
    const { uid, password } = req.body;
    const user = await userSchema.findOne({ uid });

    // Check if user exists
    if (!user) {
      return res.json({ error: "No User Found" });
    }

    // Check if Password Matches
    const match = await comparePassword(password, user.password);

    if (match) {
      // Include the role in the response
      const token = jwt.sign(
        {
          id: user.id,
          userId: user._id,
          uid: user.uid,
          username: user.username,
          role: user.role,
          section: user.section,
          email: user.email,
          phonenumber: user.phonenumber,
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          photo: user.photo,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Set cookie with token
      res.cookie("token", token, { httpOnly: true });

      res.json({
        message: "User signed in successfully",
        token,
        user: {
          id: user.id,
          userId: user._id,
          username: user.username,
          role: user.role,
          section: user.section,
          email: user.email,
          phonenumber: user.phonenumber,
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address,
          photo: user.photo,
        },
      });
    }

    if (!match) {
      res.json({ error: "Password not match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// log out
exports.logout = (req, res) => {
  const cookies = req.headers.cookie;
  const prevToken = cookies.split("=")[1];
  // Logout logic
  try {
    req.logout((err) => {
      if (err) {
        console.error("Logout error:", err);
        return next(err); // Pass the error to Express error handling
      }
      req.session.destroy();
      // Optionally destroy the session
      res.json({ success: true, msg: "Logged out" });
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ success: false, error: "Failed to log out" });
  }
};

exports.getUser = async (req, res) => {
  const { username } = req.params;

  try {
    if (!username) {
      return res.status(400).json({ error: "Invalid Username" });
    }

    const user = await userSchema.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { password, ...userData } = user.toObject();

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error in getUser:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    // Fetch user entries from the database
    const { page = 1, perPage = 5 } = req.query; // Default values for query parameters

    // Validate query parameters
    if (isNaN(page) || isNaN(perPage) || page <= 0 || perPage <= 0) {
      return res.status(400).json({ error: "Invalid page or perPage values" });
    }

    // Calculate skip and limit for efficient database queries
    const skip = (page - 1) * perPage;
    const limit = perPage;

    // Fetch user entries with optimized query and projection
    const users = await userSchema.find({}, "-password", { skip, limit });

    // Format createdAt date for each user
    const formattedUsers = users.map((user) => ({
      username: user.username,
      uid: user.uid,
      createdAt: user.createdAt.toLocaleDateString("en-GB"), // Format date as day/month/year
      role: user.role,
      section: user.section,
    }));
    const totalUsers = await userSchema.countDocuments({});
    const totalPages = Math.ceil(totalUsers / perPage);
    return res.json({
      data: formattedUsers,
      currentPage: page,
      totalPages: totalPages,
      perPage: perPage,
      totalCount: totalUsers,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllUserHistory = async (req, res) => {
  try {
    // Fetch user entries from the database
    const users = await userSchema.find(
      {},
      "username uid createdAt role section"
    );

    // Format createdAt date for each user
    const formattedUsers = users.map((user) => ({
      username: user.username,
      uid: user.uid,
      createdAt: user.createdAt.toLocaleDateString("en-GB"), // Format date as day/month/year
      role: user.role,
      section: user.section,
    }));
    return res.json(formattedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
