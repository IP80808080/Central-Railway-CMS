const mrbSchema = require("../../model/checklistModel/ModelMRB");
// const pdfGenerator = require("../helper/pdfGenerator");

exports.submitChecklistMRB = async (req, res) => {
  console.log(req.body);
  try {
    const {
      equipmentNumber,
      commissioningDate,
      motor_no,
      mek1,
      productionDate,
      vastvik,
      vastvik1,
      manak3,
      uv,
      vw,
      wu,
      vastvik4,
      uv5,
      vw5,
      wu5,
      vastvik6,
      vastvik7,
      vastvik8,
      vastvik9,
      vastvik10,
      vastvik11,
      vastvik11_1,
      vastvik12,
      vastvik13,
      vastvik14,
      uv15,
      vw15,
      wu15,
      uv15_1,
      vw15_1,
      wu15_1,
      de,
      nde,
      de_17,
      Body,
      nde_17,
      vastvik_18,
      tarik_18,
      tarik_18_1,
      tarik_18_2,
      vastvik_18_2,
      vastvik19,
      manak20,
      vastvik20,
      mek2,
      manak_18,
      manak_18_1,
      manak_18_2,
      uid,
    } = req.body;

    if (!uid) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const checklist = await mrbSchema.create({
      equipmentNumber,
      commissioningDate,
      motor_no,
      mek1,
      productionDate,
      vastvik,
      vastvik1,
      manak3,
      uv,
      vw,
      wu,
      vastvik4,
      uv5,
      vw5,
      wu5,
      vastvik6,
      vastvik7,
      vastvik8,
      vastvik9,
      vastvik10,
      vastvik11,
      vastvik11_1,
      vastvik12,
      vastvik13,
      vastvik14,
      uv15,
      vw15,
      wu15,
      uv15_1,
      vw15_1,
      wu15_1,
      de,
      nde,
      de_17,
      Body,
      nde_17,
      vastvik_18,
      tarik_18,
      tarik_18_1,
      tarik_18_2,
      vastvik_18_2,
      vastvik19,
      manak20,
      vastvik20,
      mek2,
      manak_18,
      manak_18_1,
      manak_18_2,
      uid,
    });

    // Generate PDF
    // pdfGenerator.generatePDF(fullForm);

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
