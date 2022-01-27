
const Hapi = require('@hapi/hapi');
const Jwt = require('hapi-auth-jwt2');
const Routes = require('../app/routes');
const { authentication } = require('../app/middleware/auth');

require('dotenv').config();

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
});

const privateKey = process.env.JWT_PRIVATE_KEY;

const register = async() =>{

  await server.register(Jwt, {  once: true });  
  server.auth.strategy('jwt', 'jwt',
    { key: privateKey, 
      validate: authentication,
    });
  server.auth.default('jwt');
  for (let route in Routes) {
    server.route(Routes[route]);
  }
};

const init = async () => {
  
  await register();
  await server.initialize();
  return server;
};

const start = async () => {

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

module.exports = {
  init,
  start,
  register
};

