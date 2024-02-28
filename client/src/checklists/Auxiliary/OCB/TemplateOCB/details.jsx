import PropTypes from "prop-types";
export default function Details({
  equipmentNumber,
  mecPar,
  commissioningDate,
  productionDate,
}) {
  return (
    <>
      <div className="text-center">
        <header>
          <h1 className="custom-font-size">
            <p className="custom-font-size-sm">
              विद्युत लोको शेड, भुसावल/मध्य रेल
            </p>
            <p className="custom-font-size">ELECTRIC LOCO SHED, BSL/C.R.</p>
            <u>
              <p className="custom-font-size-sm">
                चेकशीट ओसीबी के लिए(CHECK SHEET FOR OCB)
              </p>
            </u>
          </h1>
        </header>
      </div>
      <br></br>
      <div className="container mt-5 px-4">
        <div className="grid grid-cols-3 gap-4 px-8">
          <div className="col-span-3 sm:col-span-1">
            <span style={{ whiteSpace: "pre" }}>
              उपकरण नंबर: {equipmentNumber}
            </span>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <span style={{ whiteSpace: "pre" }}>मेक: {mecPar}</span>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <span style={{ whiteSpace: "pre" }}>कमिशनींग दिनांक: </span>
            {new Date(commissioningDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </div>

          <div className="col-span-3 sm:col-span-1">
            <span style={{ whiteSpace: "pre" }}>निर्मिती दिनांक: </span>
            {new Date(productionDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </>
  );
}
Details.propTypes = {
  equipmentNumber: PropTypes.string.isRequired,
  mecPar: PropTypes.string.isRequired,
  commissioningDate: PropTypes.string.isRequired,
  productionDate: PropTypes.string.isRequired,
};
