const { itemQueries } = require('../queries');
const { itemDecorator } = require('../decorators');
const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/messages').MESSAGE;
const { ItemService } = require('../services');

const getItems = async(request, h)=>{
  try{
    const rawData = await itemQueries.getItems(); 
    const data = await itemDecorator(rawData);
    
    return responseHandler.ok(h, message('items').success, data);
  }catch(err){
    return responseHandler.internalError(h, message().serverError, err);
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

const createItem = async(request, h)=>{
  try{
    const payload = request.payload;

    if(!payload || !payload.name) return responseHandler.badRequest(h, message('name').incompleteKeyOrValue);
    if(!payload.sku) return responseHandler.badRequest(h, message('sku').incompleteKeyOrValue);
    if(!payload.desc) return responseHandler.badRequest(h, message('desc').incompleteKeyOrValue);

    await ItemService.createItem(payload);
    
    return responseHandler.ok(h, message('item').created, []);
  }catch(err){
    return responseHandler.internalError(h, message().serverError);
  }
};

const checkItemExist = async(h, id) => {
  const item = await itemQueries.getItemDetail(id);
  if(item.length === 0) {
    return responseHandler.notFound(h, message('item').notFoundResource);
  }
};

const updateItem = async(request, h)=>{
  try{
    const id = request.params.id;
    const payload = request.payload;

    if (isNaN(id)) {
      return responseHandler.badRequest(h, message('id').invalidType);
    };

    if(!payload || !payload.name) return responseHandler.badRequest(h, message('name').incompleteKeyOrValue);
    if(!payload.sku) return responseHandler.badRequest(h, message('sku').incompleteKeyOrValue);
    if(!payload.desc) return responseHandler.badRequest(h, message('desc').incompleteKeyOrValue);

    await checkItemExist(h, id);
    await ItemService.updateItem(id, payload);
    
    return responseHandler.ok(h, message('item').updated, []);
  }catch(err){
    return responseHandler.internalError(h, message().serverError);
  }
};

const deleteItem = async(request, h)=>{
  try{
    const id = request.params.id;

    if (isNaN(id)) {
      return responseHandler.badRequest(h, message('id').invalidType);
    };

    await checkItemExist(h, id);
    await ItemService.deleteItem(id);
    
    return responseHandler.ok(h, message('item').deleted, []);
  }catch(err){
    return responseHandler.internalError(h, message().serverError);
  }
};



module.exports = {
  getItems,
  getItemDetail,
  createItem,
  updateItem,
  deleteItem
};