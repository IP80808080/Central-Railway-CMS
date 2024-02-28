const mongoose = require("mongoose");

const mrbSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technician",
    },
    equipmentNumber: {
      type: String,
      required: true,
    },
    commissioningDate: {
      type: Date,
    },
    motor_no: {
      type: String,
    },
    mek1: {
      type: String,
    },
    productionDate: {
      type: Date,
    },
    vastvik: {
      type: String,
    },
    vastvik1: {
      type: String,
    },
    manak3: {
      type: String,
    },
    uv: {
      type: String,
    },
    vw: {
      type: String,
    },
    wu: {
      type: String,
    },
    vastvik4: {
      type: String,
    },
    uv5: {
      type: String,
    },
    vw5: {
      type: String,
    },
    wu5: {
      type: String,
    },
    vastvik6: {
      type: String,
    },
    vastvik7: {
      type: String,
    },
    vastvik8: {
      type: String,
    },
    vastvik9: {
      type: String,
    },
    vastvik10: {
      type: String,
    },
    vastvik11: {
      type: String,
    },
    vastvik11_1: {
      type: String,
    },
    vastvik12: {
      type: String,
    },
    vastvik13: {
      type: String,
    },
    vastvik14: {
      type: String,
    },
    uv15: {
      type: String,
    },
    vw15: {
      type: String,
    },
    wu15: {
      type: String,
    },
    uv15_1: {
      type: String,
    },
    vw15_1: {
      type: String,
    },
    wu15_1: {
      type: String,
    },
    de: {
      type: String,
    },
    nde: {
      type: String,
    },
    de_17: {
      type: String,
    },
    Body: {
      type: String,
    },
    nde_17: {
      type: String,
    },
    vastvik_18: {
      type: String,
    },
    tarik_18: {
      type: Date,
    },
    tarik_18_1: {
      type: Date,
    },
    tarik_18_2: {
      type: Date,
    },
    vastvik_18_2: {
      type: String,
    },
    vastvik19: {
      type: String,
    },
    manak20: {
      type: String,
    },
    vastvik20: {
      type: String,
    },
    mek2: {
      type: String,
    },
    manak_18: {
      type: String,
    },
    manak_18_1: {
      type: String,
    },
    manak_18_2: {
      type: String,
    },
    uid: {
      type: Number,
      required: true,
      unique: true,
    },
    submittedDate: {
      type: Date,
      default: Date.now,
    },
    Reverted: {
      type: Boolean,
      default: false,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    remarks: {
      type: String,
    },
    form: {
      type: String,
      default: "MRB",
    },
    history: {
      type: Boolean,
      default: false,
    },
    section: {
      type: String,
      default: "Auxiliary",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Checklist_Aul_MRB", mrbSchema);
