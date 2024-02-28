const checklistSchema = require("../../model/checklistModel/ModelOCB");
const RevertedOCB = require("../../model/RevertedModel/RevertedOCB");

exports.ResubmitOCB = async (req, res) => {
  console.log(req.body);
  try {
    const {
      equipmentNumber,
      commissioningDate,
      mecPar,
      productionDate,
      u,
      v,
      w,
      vastvik2,
      uv3,
      vw3,
      wu3,
      vastvik4,
      uv5,
      vastvik7,
      vastvik8,
      vastvik9,
      vastvik10,
      vastvik11,
      vastvik12,
      vastvik13,
      vastvik14,
      vastvik15,
      u16,
      v16,
      w16,
      u16_1,
      de17,
      body18,
      de18,
      nde18,
      nde17,
      tarik19,
      mek19,
      tarik19_1,
      mek19_1,
      vastvik19_1,
      vastvik19_2,
      vastvik20,
      vastvik21,
      vastvik3,
      wu5,
      vastvik21_1,
      v162,
      w163,
      vw5,
      vastvik6,
      uid,
    } = req.body;

    if (!uid) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const checklist = await checklistSchema.create({
      equipmentNumber,
      commissioningDate,
      mecPar,
      productionDate,
      u,
      v,
      w,
      vastvik2,
      uv3,
      vw3,
      wu3,
      vastvik4,
      uv5,
      vastvik7,
      vastvik8,
      vastvik9,
      vastvik10,
      vastvik11,
      vastvik12,
      vastvik13,
      vastvik14,
      vastvik15,
      u16,
      v16,
      w16,
      u16_1,
      de17,
      body18,
      de18,
      nde18,
      nde17,
      tarik19,
      mek19,
      tarik19_1,
      mek19_1,
      vastvik19_1,
      vastvik19_2,
      vastvik20,
      vastvik21,
      vastvik3,
      wu5,
      vastvik21_1,
      v162,
      w163,
      vw5,
      vastvik6,
      uid,
    });

    // Generate PDF
    // pdfGenerator.generatePDF(fullForm);
    await RevertedOCB.deleteOne({ uid });

    return res
      .status(201)
      .json({ message: "Checklist submitted successfully!" });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ error: "Validation failed", details: error.errors });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};
