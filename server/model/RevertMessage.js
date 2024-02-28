const mongoose = require("mongoose");

const revertSchema = new mongoose.Schema({
  uid: {
    type: Number,
    required: true,
  },
  submittedDate: {
    type: Date,
    required: true,
  },
  revertReason: {
    type: String,
    required: true,
  },
  form: {
    type: String,
    default: "OCB",
  },
});

const Revert = mongoose.model("Revert", revertSchema);

module.exports = Revert;
