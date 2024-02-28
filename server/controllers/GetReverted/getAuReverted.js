const RevertedOCB = require("../../model/RevertedModel/RevertedOCB");
const RevertedMRB = require("../../model/RevertedModel/RevertedMRB");

exports.getocbReverted = async (req, res) => {
  try {
    const { uid } = req.params;

    const history = await RevertedOCB.find({ uid });
    console.log(history);
    res.status(200).json(history);
  } catch (error) {
    console.error("Error retrieving history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getmrbReverted = async (req, res) => {
  try {
    const { uid } = req.params;

    const history = await RevertedMRB.find({ uid });

    res.status(200).json(history);
  } catch (error) {
    console.error("Error retrieving history:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
