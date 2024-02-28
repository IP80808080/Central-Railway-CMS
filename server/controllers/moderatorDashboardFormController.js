const c2Schema = require("../model/checklistModel/ModelC2");
const mrbSchema = require("../model/checklistModel/ModelMRB");
const checklistSchema = require("../model/checklistModel/ModelOCB");

//Auxiliary
exports.auxiliaryOCB = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const ocbForms = await checklistSchema
      .find({
        $and: [
          { submittedDate: { $gte: today } },
          { history: false },
          { Reverted: false },
        ],
      })
      .sort({ submittedDate: "desc" });
    res.json(ocbForms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.auxiliaryMRB = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const mrbForms = await mrbSchema
      .find({
        $and: [
          { submittedDate: { $gte: today } },
          { history: false },
          { Reverted: false },
        ],
      })
      .sort({ submittedDate: "desc" });
    res.json(mrbForms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.PneumaticC2 = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const c2SForms = await c2Schema
      .find({
        $and: [
          { submittedDate: { $gte: today } },
          { history: false },
          { Reverted: false },
        ],
      })
      .sort({ submittedDate: "desc" });
    res.json(c2SForms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getChecklistName = (section, formType) => {
  // Find the section data based on the provided section name
  const sectionInfo = sectionData[section];

  // Find the checklist object within the section data that matches the formType
  const checklist = sectionInfo.find((item) =>
    item.items.some((item) => item.equipment === formType)
  );

  // Return the checklistName if found, or null if not found
  return checklist ? checklist.checklistName : null;
};
