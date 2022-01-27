const bcrypt = require('bcryptjs');
const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/messages').MESSAGE;
const utils = require('../../helpers/utils');
const { authQueries } = require('../queries');
const jwt = require('../../lib/jwt');

const login = async(request, h)=>{
  try{

    const authHeader = request.headers.authorization;

    if(!authHeader || authHeader.indexOf('Basic ') === -1){
      return responseHandler.authenticationFailed(h, message('authentication header').incompleteKeyOrValue).takeover();
    }

    const base64Credentials =  authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if(!utils.validateEmail(username)){
      return responseHandler.badRequest(h, message('username').invalidFormat);
    }

    const user = await authQueries.getUserCred(username);

    if(user.length === 0){
      return responseHandler.notFound(h, message('user').notFoundResource);
    }
    // compare email pass
    const match = await bcrypt.compare(password, user[0].password);
    
    if(!match){
      return responseHandler.badRequest(h, message().invalidEmailOrPassword);
    }
    // generate token
    const token = await jwt.generateToken(user[0]);

    const data = { token };

    return responseHandler.ok(h, message('login').success, data);

  }catch(err){
    return responseHandler.internalError(h, message().serverError);
  }
};

module.exports = {
  login,
};