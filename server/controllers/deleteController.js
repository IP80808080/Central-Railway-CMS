const userSchema = require("../model/userModel");

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await userSchema.findOneAndDelete({ uid: userId });
    if (deletedUser) {
      res
        .status(200)
        .json({ message: "User deleted successfully", user: deletedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
