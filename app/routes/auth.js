const { AuthController } = require('../controllers');

module.exports =  [
  {
    method: 'POST',
    path:  '/api/auth',
    config: { auth: false },
    handler: function(request, h){
      return AuthController.login(request, h);
    },
  },
];