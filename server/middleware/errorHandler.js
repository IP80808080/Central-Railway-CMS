const ErrorResponse = require("../utils/errorResponse");
const { logEvents } = require("./logger");
const errorHandlerd = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.name === "CastError") {
    const message = `Ressource not found ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate value
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => " " + val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.codeStatus || 500).json({
    success: false,
    error: error.message || "server error",
  });
};

const errorHandlera = (err, req, res, next) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500; // server error

  res.status(status);

  res.json({ message: err.message });
};

module.exports = { errorHandlerd, errorHandlera };
