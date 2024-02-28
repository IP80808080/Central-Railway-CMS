const userSchema = require("../model/userModel");

exports.getUserCount = async (req, res) => {
  try {
    // Get counts of users based on their roles
    const adminCount = await userSchema.countDocuments({ role: "admin" });
    const moderatorCount = await userSchema.countDocuments({
      role: "moderator",
    });
    const clientCount = await userSchema.countDocuments({ role: "client" });

    // Send response with counts
    res.json({ adminCount, moderatorCount, clientCount });
  } catch (error) {
    console.error("Error fetching user counts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
