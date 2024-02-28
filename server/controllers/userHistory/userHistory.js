const checklistSchema = require("../../model/checklistModel/ModelOCB");
const mrbSchema = require("../../model/checklistModel/ModelMRB");

exports.getocbuserHistory = async (req, res) => {
  try {
    const { uid } = req.params;

    // Find all form entries for the specified user UID
    const userForms = await checklistSchema.find({ uid });

    res.json(userForms);
  } catch (error) {
    console.error("Error fetching user forms history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getmrbuserHistory = async (req, res) => {
  try {
    const { uid } = req.params;

    // Find all form entries for the specified user UID
    const userForms = await mrbSchema.find({ uid });

    res.json(userForms);
  } catch (error) {
    console.error("Error fetching user forms history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
