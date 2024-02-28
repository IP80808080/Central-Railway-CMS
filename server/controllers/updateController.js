const userSchema = require("../model/userModel");

const updateUser = async (req, res) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    const body = req.body;

    const updatedUser = await userSchema.findByIdAndUpdate(userId, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      console.error("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User updated successfully:", updatedUser);
    return res
      .status(200)
      .json({ msg: "Record Updated...!", data: updatedUser });
  } catch (error) {
    console.error("Error in updateUser:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/////////////////////////////////////////////////////////////////////////

const updateRolenSection = async (req, res) => {
  try {
    const { uid } = req.params;
    const { role, section } = req.body;
    // Fetch the user by UID
    const user = await userSchema.findOne({ uid });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if user is admin
    if (user.role === "admin") {
      return res.status(400).json({ error: "Admin role cannot be changed" });
    }

    // Update user role if provided
    if (role) {
      user.role = role;
    }

    // Update user section if provided
    if (section) {
      user.section = section;
    }
    await user.save();

    console.log("User role updated successfully:", user);
    return res
      .status(200)
      .json({ message: "User role updated successfully", user });
  } catch (error) {
    console.error("Error updating user role:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

////////////////////////////////////////////////////////////////////

module.exports = {
  updateUser,
  updateRolenSection,
};
