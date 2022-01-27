const { users } = require('../../db/models');

const getUserCred = async(email)=>{
  return users.findAll({
    where:{email},
    raw : true,
  });
};

module.exports = {
  getUserCred,
};