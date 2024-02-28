const checklistSchema = require("../model/checklistModel/ModelOCB");
const mrbSchema = require("../model/checklistModel/ModelMRB");
const c2Schema = require("../model/checklistModel/ModelC2");

exports.acceptedOCB = async (req, res) => {
  try {
    const { formId } = req.params;

    const updatedForm = await checklistSchema.findByIdAndUpdate(
      formId,
      { accepted: true, history: true },
      { new: true }
    );
    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.json(updatedForm);
  } catch (error) {
    console.error("Error accepting form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.acceptedMRB = async (req, res) => {
  try {
    const { formId } = req.params;
    const updatedForm = await mrbSchema.findByIdAndUpdate(
      formId,
      { accepted: true, history: true },
      { new: true }
    );
    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.json(updatedForm);
  } catch (error) {
    console.error("Error accepting form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.acceptedC2 = async (req, res) => {
  try {
    const { formId } = req.params;
    const updatedForm = await c2Schema.findByIdAndUpdate(
      formId,
      { accepted: true, history: true },
      { new: true }
    );
    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.json(updatedForm);
  } catch (error) {
    console.error("Error accepting form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
