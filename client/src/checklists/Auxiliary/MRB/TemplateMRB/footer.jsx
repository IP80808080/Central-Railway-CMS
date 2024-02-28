import PropTypes from "prop-types";

export default function Footer({ sign }) {
  return (
    <>
      <footer>
        <div className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row md:space-x-4 justify-around">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span style={{ whiteSpace: "pre" }}>
                तकनिशियन का नाम एवं हस्ताक्षर:{" "}
              </span>
              <b>{sign}</b>
            </div>

            <div className="flex items-center space-x-2">
              सुपरवाईजर का नाम एवं हस्ताक्षर:
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
Footer.propTypes = {
  sign: PropTypes.string.isRequired,
};
