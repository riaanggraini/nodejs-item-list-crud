const { itemQueries } = require('../queries');
const { itemDecorator } = require('../decorators');
const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/messages').MESSAGE;

const getItems = async(request, h)=>{
  try{
    const rawData = await itemQueries.getItems(); 
    const data = await itemDecorator(rawData);
    
    return responseHandler.ok(h, message('items').success, data);
  }catch(err){
    return responseHandler.internalError(h, message().serverError);
  }
};

const getItemDetail = async(request, h)=>{
  try{
    const id = request.params.id;

    if (isNaN(id)) {
      return responseHandler.badRequest(h, message('id').invalidType);
    };

    const rawData = await itemQueries.getItemDetail(id);
    const data = await itemDecorator(rawData);

    return responseHandler.ok(h, message('item').success, data);
  }catch(err){
    return responseHandler.internalError(h, message().serverError);
  }
};
module.exports = {
  getItems,
  getItemDetail
};