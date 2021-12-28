function sendErrorResponse(error, res) {
  const errorObj = {
    statusCode: error.statusCode || 500,
    error: error.message,
  };

  res.status(errorObj.statusCode).send({
    success: false,
    error: errorObj.error || error,
    errorCode: error.message || error.name || error,
  });
}

module.exports = sendErrorResponse;
