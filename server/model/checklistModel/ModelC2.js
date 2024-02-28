const mongoose = require("mongoose");

const c2Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technician",
    },
    equipmentNumber: {
      type: String,
      required: true,
    },
    date_1: {
      type: Date,
    },
    date_2: {
      type: Date,
    },
    date_3: {
      type: Date,
    },
    date_4: {
      type: Date,
    },
    date_5: {
      type: Date,
    },
    date_6: {
      type: Date,
    },
    date_7: {
      type: Date,
    },
    date_8: {
      type: Date,
    },
    date_9: {
      type: Date,
    },
    date_10: {
      type: Date,
    },
    date_11: {
      type: Date,
    },
    date_12: {
      type: Date,
    },
    date_OH_1: {
      type: Date,
    },
    date_OH_2: {
      type: Date,
    },
    date_OH_3: {
      type: Date,
    },
    date_OH_4: {
      type: Date,
    },
    date_OH_5: {
      type: Date,
    },
    date_OH_6: {
      type: Date,
    },
    date_OH_7: {
      type: Date,
    },
    date_OH_8: {
      type: Date,
    },
    date_OH_9: {
      type: Date,
    },
    date_OH_10: {
      type: Date,
    },
    date_OH_11: {
      type: Date,
    },
    date_OH_12: {
      type: Date,
    },
    loco_no_1: {
      type: String,
    },
    loco_no_2: {
      type: String,
    },
    loco_no_3: {
      type: String,
    },
    loco_no_4: {
      type: String,
    },
    loco_no_5: {
      type: String,
    },
    loco_no_6: {
      type: String,
    },
    loco_no_7: {
      type: String,
    },
    loco_no_8: {
      type: String,
    },
    loco_no_9: {
      type: String,
    },
    loco_no_10: {
      type: String,
    },
    loco_no_11: {
      type: String,
    },
    loco_no_12: {
      type: String,
    },
    reason_1: {
      type: String,
    },
    reason_2: {
      type: String,
    },
    reason_3: {
      type: String,
    },
    reason_4: {
      type: String,
    },
    reason_5: {
      type: String,
    },
    reason_6: {
      type: String,
    },
    reason_7: {
      type: String,
    },
    reason_8: {
      type: String,
    },
    reason_9: {
      type: String,
    },
    reason_10: {
      type: String,
    },
    reason_11: {
      type: String,
    },
    reason_12: {
      type: String,
    },
    defect_1: {
      type: String,
    },
    defect_2: {
      type: String,
    },
    defect_3: {
      type: String,
    },
    defect_4: {
      type: String,
    },
    defect_5: {
      type: String,
    },
    defect_6: {
      type: String,
    },
    defect_7: {
      type: String,
    },
    defect_8: {
      type: String,
    },
    defect_9: {
      type: String,
    },
    defect_10: {
      type: String,
    },
    defect_11: {
      type: String,
    },
    defect_12: {
      type: String,
    },
    make: {
      type: String,
    },
    mfg: {
      type: String,
    },
    bsl: {
      type: String,
    },
    oh_1: {
      type: String,
    },
    oh_2: {
      type: String,
    },
    oh_3: {
      type: String,
    },
    oh_4: {
      type: String,
    },
    oh_5: {
      type: String,
    },
    oh_6: {
      type: String,
    },
    oh_7: {
      type: String,
    },
    oh_8: {
      type: String,
    },
    oh_9: {
      type: String,
    },
    oh_10: {
      type: String,
    },
    oh_11: {
      type: String,
    },
    of_12: {
      type: String,
    },
    cb_12: {
      type: String,
    },
    c_12: {
      type: String,
    },
    free_1: {
      type: String,
    },
    free_2: {
      type: String,
    },
    free_3: {
      type: String,
    },
    free_4: {
      type: String,
    },
    free_5: {
      type: String,
    },
    free_6: {
      type: String,
    },
    free_7: {
      type: String,
    },
    free_8: {
      type: String,
    },
    free_9: {
      type: String,
    },
    free_10: {
      type: String,
    },
    free_11: {
      type: String,
    },
    condition_1: {
      type: String,
    },
    condition_2: {
      type: String,
    },
    condition_3: {
      type: String,
    },
    condition_4: {
      type: String,
    },
    condition_5: {
      type: String,
    },
    condition_6: {
      type: String,
    },
    condition_7: {
      type: String,
    },
    condition_8: {
      type: String,
    },
    condition_9: {
      type: String,
    },
    condition_10: {
      type: String,
    },
    condition_11: {
      type: String,
    },
    cleaning_1: {
      type: String,
    },
    cleaning_2: {
      type: String,
    },
    cleaning_3: {
      type: String,
    },
    cleaning_4: {
      type: String,
    },
    cleaning_5: {
      type: String,
    },
    cleaning_6: {
      type: String,
    },
    cleaning_7: {
      type: String,
    },
    cleaning_8: {
      type: String,
    },
    cleaning_9: {
      type: String,
    },
    cleaning_10: {
      type: String,
    },
    cleaning_11: {
      type: String,
    },
    body_1: {
      type: String,
    },
    body_2: {
      type: String,
    },
    body_3: {
      type: String,
    },
    body_4: {
      type: String,
    },
    body_5: {
      type: String,
    },
    body_6: {
      type: String,
    },
    body_7: {
      type: String,
    },
    body_8: {
      type: String,
    },
    body_9: {
      type: String,
    },
    body_10: {
      type: String,
    },
    body_11: {
      type: String,
    },
    provided_1: {
      type: String,
    },
    provided_2: {
      type: String,
    },
    provided_3: {
      type: String,
    },
    provided_4: {
      type: String,
    },
    provided_5: {
      type: String,
    },
    provided_6: {
      type: String,
    },
    provided_7: {
      type: String,
    },
    provided_8: {
      type: String,
    },
    provided_9: {
      type: String,
    },
    provided_10: {
      type: String,
    },
    provided_11: {
      type: String,
    },
    provided_12: {
      type: String,
    },
    ////////////Table2////////////////////
    apply_pressure_1: {
      type: String,
    },
    apply_pressure_2: {
      type: String,
    },
    apply_pressure_3: {
      type: String,
    },
    apply_pressure_4: {
      type: String,
    },
    apply_pressure_5: {
      type: String,
    },
    apply_pressure_6: {
      type: String,
    },
    apply_pressure_7: {
      type: String,
    },
    apply_pressure_8: {
      type: String,
    },
    apply_pressure_9: {
      type: String,
    },
    apply_pressure_10: {
      type: String,
    },
    apply_pressure_11: {
      type: String,
    },
    apply_3_1: {
      type: String,
    },
    apply_3_2: {
      type: String,
    },
    apply_3_3: {
      type: String,
    },
    apply_3_4: {
      type: String,
    },
    apply_3_5: {
      type: String,
    },
    apply_3_6: {
      type: String,
    },
    apply_3_7: {
      type: String,
    },
    apply_3_8: {
      type: String,
    },
    apply_3_9: {
      type: String,
    },
    apply_3_10: {
      type: String,
    },
    apply_3_11: {
      type: String,
    },
    leakage_1: {
      type: String,
    },
    leakage_2: {
      type: String,
    },
    leakage_3: {
      type: String,
    },
    leakage_4: {
      type: String,
    },
    leakage_5: {
      type: String,
    },
    leakage_6: {
      type: String,
    },
    leakage_7: {
      type: String,
    },
    leakage_8: {
      type: String,
    },
    leakage_9: {
      type: String,
    },
    leakage_10: {
      type: String,
    },
    leakage_11: {
      type: String,
    },
    provided_in_loco_1: {
      type: String,
    },
    provided_in_loco_2: {
      type: String,
    },
    provided_in_loco_3: {
      type: String,
    },
    provided_in_loco_4: {
      type: String,
    },
    provided_in_loco_5: {
      type: String,
    },
    provided_in_loco_6: {
      type: String,
    },
    provided_in_loco_7: {
      type: String,
    },
    provided_in_loco_8: {
      type: String,
    },
    provided_in_loco_9: {
      type: String,
    },
    provided_in_loco_10: {
      type: String,
    },
    provided_in_loco_11: {
      type: String,
    },
    technician_sign_1: {
      type: String,
    },
    technician_sign_2: {
      type: String,
    },
    technician_sign_3: {
      type: String,
    },
    technician_sign_4: {
      type: String,
    },
    technician_sign_5: {
      type: String,
    },
    technician_sign_6: {
      type: String,
    },
    technician_sign_7: {
      type: String,
    },
    technician_sign_8: {
      type: String,
    },
    technician_sign_9: {
      type: String,
    },
    technician_sign_10: {
      type: String,
    },
    technician_sign_11: {
      type: String,
    },
    supervisior_sign_1: {
      type: String,
    },
    supervisior_sign_2: {
      type: String,
    },
    supervisior_sign_3: {
      type: String,
    },
    supervisior_sign_4: {
      type: String,
    },
    supervisior_sign_5: {
      type: String,
    },
    supervisior_sign_6: {
      type: String,
    },
    supervisior_sign_7: {
      type: String,
    },
    supervisior_sign_8: {
      type: String,
    },
    supervisior_sign_9: {
      type: String,
    },
    supervisior_sign_10: {
      type: String,
    },
    supervisior_sign_11: {
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
    accepted: {
      type: Boolean,
      default: false,
    },
    Reverted: {
      type: Boolean,
      default: false,
    },
    remarks: {
      type: String,
    },
    form: {
      type: String,
      default: "C2",
    },
    section: {
      type: String,
      default: "Pneumatic",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Checklist_PA_C2", c2Schema);
