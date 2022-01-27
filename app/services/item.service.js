const { items } = require('../../db/models');

const createItem = async(payload)=>{
  const item = await items.create(
    { name: payload.name,
      SKU: payload.sku,
      desc: payload.desc,
    }
  );
  await item.save();
};
const updateItem = async(id, payload)=>{
  const item = await items.findByPk(id);
  await item.update({ 
    name: payload.name,
    SKU: payload.sku,
    desc: payload.desc,
  },);
};

const deleteItem = async(id)=>{
  const item = await items.findByPk(id);
  await item.destroy();
};


module.exports = {
  createItem,
  updateItem,
  deleteItem
};