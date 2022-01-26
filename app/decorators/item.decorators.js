const itemDecorator = async (items) =>{
  
  const mappedItem = items.map((el)=>{
    return {
      id: el.id,
      name: el.name,
      sku: el.SKU,
      descripton: el.desc,
      posted_at: el.createdAt
    };
  });
  return await Promise.all(mappedItem);
};

module.exports = {
  itemDecorator,
};