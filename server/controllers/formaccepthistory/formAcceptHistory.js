const checklistSchema = require("../../model/checklistModel/ModelOCB");
const mrbSchema = require("../../model/checklistModel/ModelMRB");

exports.getocbAcceptedFormsHistory = async (req, res) => {
  try {
    // Filter form entries where accepted is true
    const acceptedForms = await checklistSchema.find({ accepted: true });

    // Group the accepted forms by user UID and date
    const groupedForms = acceptedForms.reduce((acc, form) => {
      const date = form.submittedDate.toISOString().split("T")[0]; // Extract date
      const key = `${form.uid}_${date}`; // Unique key for grouping
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(form);
      return acc;
    }, {});

    res.json(groupedForms);
  } catch (error) {
    console.error("Error fetching accepted forms history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getmrbAcceptedFormsHistory = async (req, res) => {
  try {
    // Filter form entries where accepted is true
    const acceptedForms = await mrbSchema.find({ accepted: true });

    // Group the accepted forms by user UID and date
    const groupedForms = acceptedForms.reduce((acc, form) => {
      const date = form.submittedDate.toISOString().split("T")[0]; // Extract date
      const key = `${form.uid}_${date}`; // Unique key for grouping
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(form);
      return acc;
    }, {});

    res.json(groupedForms);
  } catch (error) {
    console.error("Error fetching accepted forms history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
