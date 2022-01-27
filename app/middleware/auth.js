const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/messages').MESSAGE;
const { authQueries } = require('../queries');

const authentication = async(decoded, request, h)=>{
  try{
    // check if user exist
    const user = await authQueries.getUserCred(decoded.data.email);
    if(user.length === 0){
      return {  isValid: false , response: responseHandler.authenticationFailed(h, message('user').notFoundResource)};
    }
    return { isValid: true};
  }catch(err){
    return { response: responseHandler.internalError(h, message().serverError) }; 
  }
};

module.exports = {
  authentication
};