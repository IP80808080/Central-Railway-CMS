const checklistSchema = require("../../model/checklistModel/ModelOCB");
const mrbSchema = require("../../model/checklistModel/ModelMRB");

exports.getocbAcceptedFormsHistoryView = async (req, res) => {
  try {
    const { uid, submittedDate } = req.params;
    console.log("UID:", uid);
    console.log("Submitted Date:", submittedDate);

    // Retrieve form data for the specified UID and submitted date
    const formData = await checklistSchema.findOne({ uid, submittedDate });

    console.log("FormData:", formData);

    if (!formData) {
      return res.status(404).json({
        error: "Data not found for the specified UID and submitted date",
      });
    }

    res.json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getmrbAcceptedFormsHistoryView = async (req, res) => {
  try {
    const { uid, submittedDate } = req.params;
    console.log("UID:", uid);
    console.log("Submitted Date:", submittedDate);

    // Retrieve form data for the specified UID and submitted date
    const formData = await mrbSchema.findOne({ uid, submittedDate });

    console.log("FormData:", formData);

    if (!formData) {
      return res.status(404).json({
        error: "Data not found for the specified UID and submitted date",
      });
    }

    res.json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
