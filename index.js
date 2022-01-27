
const Hapi = require('@hapi/hapi');
const Jwt = require('hapi-auth-jwt2');
const Routes = require('./app/routes');
const { authentication } = require('./app/middleware/auth');
const responseHandler = require('./helpers/error_handling');
const message = require('./helpers/messages').MESSAGE;
require('dotenv').config();

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  await server.register(Jwt);
  const privateKey = process.env.JWT_PRIVATE_KEY;

  server.auth.strategy('jwt', 'jwt',
    { key: privateKey, // Never Share your secret key
      validate: authentication,
    });

  server.auth.default('jwt');
  for (var route in Routes) {
    server.route(Routes[route]);
  }
  
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();

