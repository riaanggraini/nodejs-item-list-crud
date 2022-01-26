const response = required('./response');

const badRequest = (res, message) => {
  const type = 'invalid_request_error';
  res.status(400).json(response(message, [], type));
};

const notFound = (res, message) => {
  const type = 'invalid_request_error';
  res.status(404).json(response(message, [], type));
};

const internalError = (res, message) => {
  const type = 'api_error';
  res.status(500).json(response(message, [], type));
};

const authenticationFailed = (res, message) => {
  const type = 'authentication_error';
  res.status(401).json(response(message, [], type));
};

module.exports = {
  badRequest,
  notFound,
  internalError,
  authenticationFailed,
}
