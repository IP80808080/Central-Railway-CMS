const mrbSchema = require("../../model/checklistModel/ModelMRB");

exports.getMRB = async (req, res) => {
  try {
    const { uid } = req.params;
    const currentDate = new Date().toISOString().split("T")[0]; // Get current date in format 'YYYY-MM-DD'
    console.log("UID:", uid);
    console.log("Current Date:", currentDate);

    // Retrieve form data for the specified UID and current date
    const formData = await mrbSchema.findOne({
      uid,
      $expr: {
        $eq: [
          { $dateToString: { format: "%Y-%m-%d", date: "$submittedDate" } },
          currentDate,
        ],
      },
    });

    console.log("FormData:", formData);

    if (!formData) {
      return res
        .status(404)
        .json({ error: "Data not found for the current date and UID" });
    }

    res.json(formData);
  } catch (error) {
    console.error("Error fetching form data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
