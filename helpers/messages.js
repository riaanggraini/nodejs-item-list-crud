
const MESSAGE = (key) => {
  const success = `${key} success`;
  const created = `${key} created successfuly`;
  const updated = `${key} updated successfuly`;
  const deleted = `${key} deleted successfuly`;
  const incompleteKeyOrValue = `Missing required key or value: ${key}`;
  const invalidEmailOrPassword = 'Invalid email/phone number or password';
  const invalidType = `Value is invalid data type: ${key}`;
  const invalidFormat = `Value is invalid format: ${key}`;
  const notFoundResource = `${key} not found in our database`;
  const invalidCreateResource = `invalid create resource: ${key}`;
  const loginError = 'Failed to login';
  const unathorization = 'failed to unathorize';
  const serverError = 'Internal Server Error';

  return message = {
    success,
    created,
    updated,
    deleted,
    incompleteKeyOrValue,
    invalidEmailOrPassword,
    invalidType,
    invalidFormat,
    notFoundResource,
    invalidCreateResource,
    loginError,
    unathorization,
    serverError
  };
};

module.exports = {
  MESSAGE,
};