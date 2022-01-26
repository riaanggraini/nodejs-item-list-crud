const { ItemController } = require('../controllers');

module.exports =  [
  {
    method: 'GET',
    path:  '/api/items',
    handler: function(request, h){
      return ItemController.getItems(request, h);
    }
  },
  {
    method: 'GET',
    path:  '/api/item/{id}',
    handler: function(request, h){
      return ItemController.getItemDetail(request, h);
    }
  },
];