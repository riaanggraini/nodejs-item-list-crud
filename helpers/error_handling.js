const response = require('./response');

const ok =(halt, message, data = []) => {
  const type = 'success';
  return halt.response(response(message, data, type, false)).code(200); 
};

const created =(halt, message, data = []) => {
  const type = 'success';
  return halt.response(response(message, data, type, false)).code(201); 
};

const badRequest = (halt, message) => {
  const type = 'invalid_request_error';
  return halt.response(response(message, [], type)).code(400);
};

const notFound = (halt, message) => {
  const type = 'invalid_request_error';
  return halt.response(response(message, [], type)).code(404);
};

const internalError = (halt, message) => {
  const type = 'api_error';
  return halt.response(response(message, [], type)).code(500);
};

const authenticationFailed = (halt, message) => {
  const type = 'authentication_error';
  return halt.response(response(message, [], type)).code(401);
};

module.exports = {
  ok,
  created,
  badRequest,
  notFound,
  internalError,
  authenticationFailed,
};
