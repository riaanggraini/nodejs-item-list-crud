const { ItemController } = require('../controllers');

module.exports =  [
  {
    method: 'GET',
    path:  '/api/items',
    config: { auth: false },
    handler: function(request, h){
      return ItemController.getItems(request, h);
    }
  },
  {
    method: 'GET',
    path:  '/api/item/{id}',
    config: { auth: false },
    handler: function(request, h){
      return ItemController.getItemDetail(request, h);
    }
  },
  {
    method: 'POST',
    path:  '/api/item',
    config: { auth: 'jwt' },
    handler: function(request, h){
      return ItemController.createItem(request, h);
    },
  },
  {
    method: 'PUT',
    path:  '/api/item/{id}',
    config: { auth: 'jwt' },
    handler: function(request, h){
      return ItemController.updateItem(request, h);
    },
  },
  {
    method: 'DELETE',
    path:  '/api/item/{id}',
    config: { auth: 'jwt' },
    handler: function(request, h){
      return ItemController.deleteItem(request, h);
    },
  },
];