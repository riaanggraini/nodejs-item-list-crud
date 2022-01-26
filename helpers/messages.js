
const MESSAGE = (key) => {
	const success = `${key} success`;
	const incompleteKey = `Missing required key: ${key}`;
	const incompleteValue = `Missing require value: ${key}`;
	const invalidEmailOrPassword = 'Invalid email/phone number or password';
	const invalidType = `Value is invalid data type: ${key}`;
	const notFoundResource = `Resource not found: ${key}`;
	const errorFindResource = `Failed find resource: ${key}`;
	const errorUpdateResource = `Failed update resource:${key} `;
	const errorDeleteResource = `Failed delete resource: ${key}`;
	const alreadyUsed = `value is duplicate: ${key}`;
	const invalidCreateResource = `invalid create resource: ${key}`;
	const invalidOption = `Value is outside option ${key}`;
	const loginError = 'Failed to login';
	const unathorization = 'failed to unathorize';

	return message = {
		success,
		incompleteKey,
		invalidEmailOrPassword,
		incompleteValue,
		invalidType,
		notFoundResource,
		errorFindResource,
		invalidFormat,
		alreadyUsed,
		invalidCreateResource,
		invalidOption,
		errorDeleteResource,
		errorUpdateResource,
		loginError,
		unathorization,
	};
};

module.exports = {
	MESSAGE,
};