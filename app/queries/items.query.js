const { items } = require('../../db/models');

const getItems = async()=>{
  return items.findAll({
    raw : true,
  });
};
const getItemDetail = async(id)=>{
  return items.findAll({
    raw : true,
    where: { id },
  });
};

module.exports = {
  getItems,
  getItemDetail,
};