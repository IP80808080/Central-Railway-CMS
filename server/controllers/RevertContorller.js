const RevertModel = require("../model/RevertMessage");
const checklistSchema = require("../model/checklistModel/ModelOCB");
const mrbSchema = require("../model/checklistModel/ModelMRB");
const RevertedOCB = require("../model/RevertedModel/RevertedOCB");
const RevertedMRB = require("../model/RevertedModel/RevertedMRB");

exports.formRevert = async (req, res) => {
  try {
    const { form, uid, submittedDate } = req.params;
    const { revertReason } = req.body;

    // Ensure that revertReason is provided in the request body
    if (!revertReason) {
      return res.status(400).json({ error: "Revert reason is required" });
    }

    let FormModel;
    switch (form) {
      case "OCB":
        FormModel = checklistSchema;
        break;
      case "MRB":
        FormModel = mrbSchema;
        break;
      default:
        return res.status(400).json({ error: "Invalid form type" });
    }

    // Save revert reason in the database
    const revert = new RevertModel({
      form,
      uid,
      submittedDate,
      revertReason,
    });
    await revert.save();

    //NEWSave
    const formEntry = await FormModel.findOne({ uid, submittedDate });
    const { Reverted, ...formDatawithoutReverted } = formEntry.toObject();
    if (form == "OCB") {
      const OCBDataReverted = new RevertedOCB(formDatawithoutReverted);
      await OCBDataReverted.save();
    } else if (form == "MRB") {
      const MRBDataReverted = new RevertedMRB(formDatawithoutReverted);
      await MRBDataReverted.save();
    }

    // Delete the form entry
    await FormModel.deleteOne({ uid, submittedDate });

    res.status(200).json({ message: "Form reverted successfully" });
  } catch (error) {
    console.error("Error reverting form:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.RevertMessageView = async (req, res) => {
  try {
    const { uid } = req.params;

    // Find the revert messages for the specific form
    const revertMessages = await RevertModel.find({
      uid,
    });

    res.status(200).json({ revertMessages });
  } catch (error) {
    console.error("Error getting revert messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.RevertViewCount = async (req, res) => {
  try {
    const userId = req.params.uid; // Assuming you pass the userId in the request params

    // Count the number of form reverts for the user
    const revertCount = await RevertModel.countDocuments({ uid: userId });

    res.status(200).json({ revertCount });
  } catch (error) {
    console.error("Error getting revert count:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.ReverMessageDelete = async (req, res) => {
  try {
    const { revertReason } = req.body;

    // Find and delete the revert message by revertReason
    await RevertModel.deleteOne({ revertReason });

    res.status(200).json({ message: "Revert message deleted successfully" });
  } catch (error) {
    console.error("Error deleting revert message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
