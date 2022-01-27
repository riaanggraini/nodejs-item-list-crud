const jwt = require('jsonwebtoken');

const generateToken = async(payload)=>{
  const privateKey = process.env.JWT_PRIVATE_KEY;
  const data = {
    email: payload.email,
    name: payload.name
  };

  const token = jwt.sign({
    data,
  }, privateKey, { expiresIn: '1h' });

  return token;
};

module.exports = {
  generateToken,
};