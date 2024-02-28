const session = require("express-session");
const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } =
  process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

const sendOtp = async (phonenumber) => {
  console.log("phonenumber:", phonenumber);

  try {
    const result = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verifications.create({
        to: "+91" + `${phonenumber}`,
        channel: "sms",
        setTimeout: 30000,
      });
    return { success: true, message: `OTP sent successfully`, payload: result };
  } catch (err) {
    throw new Error(`Error in sending otp: ${err.message}`);
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body ?? {};
    console.log("Raw Request Body:", req.body);
    const phonenumber = req.session.forgotPasswordPhonenumber;
    if (!phonenumber || !otp) {
      return res.status(400).send({
        success: false,
        message: "Invalid request. Phone number and OTP are required.",
      });
    }

    const result = await client.verify
      .services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: "+91" + `${phonenumber}`,
        code: otp,
      });

    res.status(200).send({
      success: true,
      message: "OTP verified successfully",
      payload: result,
    });
  } catch (err) {
    console.error("Error in verifying otp:", err);
    res.status(500).send({
      success: false,
      message: `Error in verifying otp: ${err.message}`,
    });
  }
};

module.exports = { sendOtp, verifyOtp };
