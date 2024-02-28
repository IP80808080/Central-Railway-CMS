//Import
const express = require("express");
const router = express.Router();
const {
  isAdmin,
  isModerator,
  isAuthenticated,
} = require("../middleware/middleware");
const { protect } = require("../middleware/auth");
const { roles } = require("../utils//constant");
const cors = require("cors");
const {
  signup,
  signin,
  logout,
  getUser,
  getAllUser,
  getAllUserHistory,
} = require("../controllers/authController");
const { verifyOtp } = require("../controllers/otpController");
const { forgotpassword } = require("../controllers/forgotpassController");
const { resetPassword } = require("../controllers/resetPassword");
const passport = require("../utils/passport");
const {
  updateUser,
  updateRolenSection,
} = require("../controllers/updateController");
const { deleteUser } = require("../controllers/deleteController");

//moderator form collection
const {
  auxiliaryMRB,
  auxiliaryOCB,
  PneumaticC2,
} = require("../controllers/moderatorDashboardFormController");

//checklist-post-controller
const {
  submitChecklist,
} = require("../controllers/checklistController/ControllerOCB");
const {
  submitChecklistMRB,
} = require("../controllers/checklistController/ControllerMRB");
const {
  submitChecklistC2,
} = require("../controllers/checklistController/ControllerC2");

//checklist-get-controller
const { getOCB } = require("../controllers/checklistGetController/getOCB");
const { getMRB } = require("../controllers/checklistGetController/getMRB");
const { getC2 } = require("../controllers/checklistGetController/getC2");

//acceptance form
const {
  acceptedOCB,
  acceptedMRB,
  acceptedC2,
} = require("../controllers/accepted");

//HistoryAdmin
const {
  getocbAcceptedFormsHistory,
  getmrbAcceptedFormsHistory,
} = require("../controllers/formaccepthistory/formAcceptHistory");

//HistoryAdminView
const {
  getmrbAcceptedFormsHistoryView,
  getocbAcceptedFormsHistoryView,
} = require("../controllers/formAdminHistoryView/formAdminHistoruView");

//HistoryUser
const {
  getocbuserHistory,
  getmrbuserHistory,
} = require("../controllers/userHistory/userHistory");

//AdminCount
const { getUserCount } = require("../controllers/admindashboardCount");

//Revert
const {
  formRevert,
  RevertViewCount,
  RevertMessageView,
  ReverMessageDelete,
} = require("../controllers/RevertContorller");

//RevertedHistory
const {
  getocbReverted,
  getmrbReverted,
} = require("../controllers/GetReverted/getAuReverted");

//Resubmit
const { ResubmitOCB } = require("../controllers/Resubmit/Resubmitocb");
const { ResubmitMRB } = require("../controllers/Resubmit/Resubmitmrb");

//handler
const adminRouteHandler = (req, res) => {
  res.json({ message: "Admin route" });
};

const moderatorRouteHandler = (req, res) => {
  res.json({ message: "Moderator route" });
};

const clientRouteHandler = (req, res) => {
  res.json({ message: "Client route" });
};

//middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Auth Routes
router.get("/", signin);
router.post("/", signin);
router.post("/register", signup);

//Username
router.get("/user/:username", getUser);
router.get("/user", getAllUser);
router.get("/user/history", getAllUserHistory);

// Forgot password Routes
router.post("/forgotpassword", forgotpassword);
router.post("/forgotpassword/otp", verifyOtp);
router.post("/forgotpassword/otp/reset", resetPassword);
router.post("/logout", logout);

//Admin or Moderator or Client
router.get("/admin", isAuthenticated, isAdmin, adminRouteHandler);
router.get("/moderator", isAuthenticated, isModerator, moderatorRouteHandler);
router.get("/client", isAuthenticated, clientRouteHandler);

//Update
router.put("/updateUser", protect, updateUser);
router.put("/:uid/rolensection", updateRolenSection);

//Delete
router.delete("/userdelete/:userId", deleteUser);

//moderator form collection
router.get("/daily/ocb", auxiliaryOCB);
router.get("/daily/mrb", auxiliaryMRB);
router.get("/daily/c2", PneumaticC2);

//Submit Form alc to Checklist
router.post("/submitForm/OCB", submitChecklist);
router.post("/submitForm/MRB", submitChecklistMRB);
router.post("/submitForm/C2", submitChecklistC2);

//Get the Checklist Data
router.get("/getOCBFormData/:uid", getOCB);
router.get("/getMRBFormData/:uid", getMRB);
router.get("/getForm/C2", getC2);

//form acceptance
router.put("/ocb/:formId/accept", acceptedOCB);
router.put("/mrb/:formId/accept", acceptedMRB);
router.put("/c2/:formId/accept", acceptedC2);

//historyAdmin
router.get("/ocb/getAcceptedFormsHistory", getocbAcceptedFormsHistory);
router.get("/mrb/getAcceptedFormsHistory", getmrbAcceptedFormsHistory);

//historyAdminView
router.get("/ocb/:submittedDate/:uid", getocbAcceptedFormsHistoryView);
router.get("/mrb/:submittedDate/:uid", getmrbAcceptedFormsHistoryView);

//historyUsers
router.get("/userocbHistory/:uid", getocbuserHistory);
router.get("/usermrbHistory/:uid", getmrbuserHistory);

//admindashbaord count
router.get("/userCounts", getUserCount);

//Revert
router.post("/revert/:form/:uid/:submittedDate", formRevert);
router.get("/revert/count/:uid", RevertViewCount);
router.get("/revert/messages/:uid", RevertMessageView);
router.delete("/revertdelete", ReverMessageDelete);

//RevertGetHistory
router.get("/revert/Au-ocb/:uid", getocbReverted);
router.get("/revert/Au-mrb/:uid", getmrbReverted);

//Resubmit
router.post("/resubmit/ocb", ResubmitOCB);
router.post("/resubmit/mrb", ResubmitMRB);

module.exports = router;
