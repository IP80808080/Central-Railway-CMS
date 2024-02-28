const { PDFDocument, rgb } = require("pdf-lib");

exports.generatePDF = async (formData) => {
  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();

    // Add text to the PDF
    page.drawText("Checklist Form", { x: 50, y: 750, color: rgb(0, 0, 0) });

    // Add form data to the PDF
    const formText =
      `UID: ${formData.uid}\nEquipment Number: ${formData.equipmentNumber}\n` +
      `Mechanical Part: ${formData.mecPar}\nCommissioning Date: ${formData.commissioningDate}\n` +
      `Production Date: ${formData.productionDate}\n`;

    page.drawText(formText, { x: 50, y: 700, color: rgb(0, 0, 0) });

    // Save the PDF to a buffer
    const pdfBytes = await pdfDoc.save();

    // Save the buffer to a file, send it via email, or upload it to a cloud storage service
    // For simplicity, this example just logs the PDF content
    console.log(pdfBytes);
  } catch (error) {
    console.error("Error during PDF generation:", error);
  }
};
