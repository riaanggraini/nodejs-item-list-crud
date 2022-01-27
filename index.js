`use strict`;

const { init, start } = require('./lib/server');

const startServer = async()=>{
  await init();
  await start();
};

startServer();