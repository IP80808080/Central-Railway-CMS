const c2Schema = require("../../model/checklistModel/ModelC2");

exports.getC2 = async (req, res) => {
  try {
    // Retrieve checklist data from MongoDB
    const checklistData = await c2Schema.find();

    // Send the data as a JSON response
    res.json(checklistData);
  } catch (error) {
    console.error("Error in fetching OCB checklist data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
