const userSchema = require("../model/userModel");
const { sendOtp } = require("../controllers/otpController");
const session = require("express-session");

exports.forgotpassword = async (req, res) => {
  try {
    const { uid, phonenumber } = req.body;

    const user = await userSchema.findOne({ uid, phonenumber });

    if (!user) {
      res.json({ success: false, error: "Invalid user credentials" });
      return;
    }
    req.session.forgotPasswordPhonenumber = phonenumber;
    // Send OTP using Twilio's functionality
    // Pass only phoneNumber to sendOtp

    // Access the generated OTP from the sendOtp response
    // (Assuming sendOtp now returns the generated OTP)
    const otpResponse = await sendOtp(phonenumber);

    if (otpResponse.success) {
      const otp = otpResponse.payload.code;
      res.json({ success: true, otp });
    } else {
      res.status(500).json({ success: false, error: otpResponse.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};
