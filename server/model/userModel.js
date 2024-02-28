const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const { roles } = require("../utils/constant");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide unique Username"],
      unique: false,
    },
    firstName: {
      type: String,
      default: "FirstName",
      unique: false,
    },
    lastName: {
      type: String,
      default: "lastName",
      unique: false,
    },
    address: {
      type: String,
      default: "address",
      unique: false,
    },

    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
      minlength: [6, "password must have at least (6) caracters"],
      unique: false,
    },
    uid: {
      type: Number,
      required: [true, "Please provide a unique ID"],
      unique: true,
    },
    phonenumber: {
      type: Number,
      required: [true, "Enter Your Phone Number"],
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "e-mail is required"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    role: {
      type: String,
      enum: ["admin", "moderator", "client"],
      default: "client",
    },
    photo: {
      type: String,
      required: [true, "Please add a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    section: {
      type: String,
      enum: [
        "Pneumatic",
        "Test_Room",
        "Electronics",
        "Traction_Motor",
        "Static",
        "Auxiliary",
        "Body_Repair",
        "Heavy_Repair",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

//encrypting password before saving
userSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;

      // Set role based on UID
      // if (uid === process.env.ADMIN_UID) {
      //   this.role = roles.admin;
      // } else if (this.uid === process.env.MODERATOR_UID) {
      //   this.role = roles.moderator;
      // } else {
      //   this.role = roles.client; // Default role
      // }
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw createHttpError.InternalServerError(error.message);
  }
};

// return a JWT token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this.uid }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = mongoose.model("User", userSchema);
