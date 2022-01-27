const Hapi = require('@hapi/hapi');
const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it, before, after, test } = exports.lab = Lab.script();
const { init }  = require('../lib/server');
const { items } = require('../db/models');

describe('item test', () =>{
  let server;
  
  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    server.stop();
  });

  describe('get all item list', () => {

    const item = [
      { name: 'item name 1',
        SKU: 'SKU001',
        desc: 'name is daddy',
      },
      { name: 'item name 2',
        SKU: 'SKU002',
        desc: 'hello from the other side',
      }
    ];
    before(async () => {
      await items.bulkCreate(item);
    });

    after(async () => {
      items.destroy({
        where: {},
        truncate: true
      });
    });

    const exec = () =>{
      return server.inject({
        method: 'get',
        url: '/api/items'
      });
    };

    it('responds with 200 with response', async () => {
      // execution
      const res = await exec();
     
      // expectation
      const response = JSON.parse(res.payload);
      expect(res.statusCode).to.equal(200);
      expect(response.data).to.be.a.array();
      expect(response.data[0].name).to.equal(item[0].name);
    });
  });
});