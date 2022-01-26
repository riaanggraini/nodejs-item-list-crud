const Hapi = require('@hapi/hapi');
const Routes = require('./app/routes');

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

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