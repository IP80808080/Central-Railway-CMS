const mongoose = require("mongoose");

const checklistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technician",
    },
    uid: {
      type: Number,
      required: true,
      unique: false,
    },
    equipmentNumber: {
      type: String,
      required: true,
      unique: false,
    },
    mecPar: {
      type: String,
      required: true,
    },
    commissioningDate: {
      type: Date,
      required: true,
    },
    productionDate: {
      type: Date,
      required: true,
    },
    // fullForm: {
    //   type: Object,
    //   default: {},
    // },
    u: {
      type: Number,
    },
    v: {
      type: String,
    },
    w: {
      type: String,
    },
    vastvik2: {
      type: String,
    },
    uv3: {
      type: String,
    },
    vw3: {
      type: String,
    },
    wu3: {
      type: String,
    },
    vastvik4: {
      type: String,
    },
    uv5: {
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
    vastvik12: {
      type: String,
    },
    vastvik13: {
      type: String,
    },
    vastvik14: {
      type: String,
    },
    vastvik15: {
      type: String,
    },
    u16: {
      type: String,
    },
    v16: {
      type: String,
    },
    w16: {
      type: String,
    },
    u16_1: {
      type: String,
    },
    de17: {
      type: String,
    },
    body18: {
      type: String,
    },
    de18: {
      type: String,
    },
    nde18: {
      type: String,
    },
    nde17: {
      type: String,
    },
    tarik19: {
      type: Date,
    },
    mek19: {
      type: String,
    },
    tarik19_1: {
      type: Date,
    },
    mek19_1: {
      type: String,
    },
    vastvik19_1: {
      type: String,
    },
    vastvik19_2: {
      type: String,
    },
    vastvik20: {
      type: String,
    },
    vastvik21: {
      type: String,
    },
    vastvik3: {
      type: String,
    },
    wu5: {
      type: String,
    },
    vastvik21_1: {
      type: String,
    },
    v162: {
      type: String,
    },
    w163: {
      type: String,
    },
    vw5: {
      type: String,
    },
    vastvik6: {
      type: String,
    },
    submittedDate: {
      type: Date,
      default: Date.now,
    },
    accepted: {
      type: Boolean,
      default: false,
    },
    remarks: {
      type: String,
    },
    Reverted: {
      type: Boolean,
      default: false,
    },
    form: {
      type: String,
      default: "OCB",
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

module.exports = mongoose.model("Checklist", checklistSchema);
