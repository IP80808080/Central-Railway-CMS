import PropTypes from "prop-types";
export default function Details({ equipmentNumber, make, bsl, mfg }) {
  return (
    <>
      <div className="text-center">
        <header>
          <h1 className="custom-font-size">C2 Relay Valve Record Register</h1>
        </header>
      </div>

      <div className="container mt-5 f-flex justify-content-center">
        <div className="container mt-5">
          <div className="grid grid-cols-3 gap-4 px-8">
            <div className="col-span-3 sm:col-span-1">
              <label htmlFor="BSL" className="col-form-label custom-label">
                <span>BSL PN NO. :- {bsl}</span>
              </label>
              <input
                id="BSL"
                type="text"
                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                placeholder="BSL"
                aria-label="BSL"
              ></input>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <label htmlFor="Sr" className="col-form-label custom-label">
                <span>Sr. No. :- {equipmentNumber}</span>
              </label>
              <input
                id="Sr"
                type="text"
                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                placeholder="Sr. No"
                aria-label="Sr"
              ></input>
            </div>
            <div className="col-span-3 sm:col-span-1">
              <label htmlFor="Make" className="col-form-label custom-label">
                <span>Make :- {make}</span>
              </label>
              <input
                id="Make"
                type="text"
                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                placeholder="Make"
                aria-label="Make"
              ></input>
            </div>

            <div className="col-span-3 sm:col-span-1">
              <label htmlFor="Mfg" className="col-form-label custom-label">
                <span>Mfg dt. :- {mfg}</span>
              </label>
              <input
                id="Mfg"
                type="date"
                className="placeholder-center text-center form-control custom-input border border-gray-300 rounded-md p-2"
                placeholder="Mfg"
                aria-label="Mfg"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Details.propTypes = {
  equipmentNumber: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  bsl: PropTypes.string.isRequired,
  mfg: PropTypes.string.isRequired,
};
