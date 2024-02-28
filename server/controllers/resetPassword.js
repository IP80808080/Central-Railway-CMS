const session = require("express-session");
const userSchema = require("../model/userModel");
const bcrypt = require("bcrypt");
exports.resetPassword = async (req, res) => {
  try {
    // Retrieve phone number from session
    const phonenumber = req.session.forgotPasswordPhonenumber;
    console.log("Phone number from session:", phonenumber);
    // Validate password fields
    const { newPassword, confirmPassword } = req.body;
    if (!newPassword || !confirmPassword || newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match or are missing.",
      });
    }

    // Find the user
    const user = await userSchema.findOne({ phonenumber });
    console.log("User found:", user);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    user.password = newPassword;
    await user.save();
    console.log("Password updated successfully");
    // Clear forgotPasswordPhonenumber from session (optional)
    req.session.destroy(); // Or delete specific key

    res.json({
      success: true,
      message: "Password reset successful.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error resetting password.",
    });
  }
};

//ELSE

// exports.completeResetPassword = asyncHandler(async (req, res) => {
//   try {
//     // get password from request body

//     const { password, confirmpassword } = req.body;
//     if (!password || !confirmpassword || password !== confirmpassword) {
//       return res.status(400).json({
//         success: false,
//         message: "Passwords do not match or are missing.",
//       });
//     }

//     // Find the user
//     const phonenumber = req.session.forgotPasswordPhonenumber;
//     const user = await userSchema.findOne({ phonenumber });
//     console.log("User found:", user);
//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "User not found.",
//       });
//     }
//     console.log(user);
//     // check if passwords do not match
//     const isMatchedPasswords = await bcrypt.compare(password, user.password);

//     if (isMatchedPasswords) {
//       res.status(400);
//       throw new Error("Sorry, you cannot reset with old password");
//     }
//     // generate salt
//     const salt = await bcrypt.genSalt(10);
//     // create hashedpwd
//     const hashedPwd = await bcrypt.hash(password, salt);
//     // update user password with new password
//     user.password = hashedPwd;
//     await user.save();
//     res
//       .status(200)
//       .json({ success: "Your new password has been set successfully" });
//   } catch (error) {
//     res.status(500);
//     throw new Error("Sorry, failed to reset user password");
//   }
// });
