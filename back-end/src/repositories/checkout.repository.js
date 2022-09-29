const sales = require('../database/models');

// const findAllSeller = async (salleId) => sales.findAll(salleId);

const findAllSeller = async () => {
    const userObj = await sales.finAll();
    return userObj;
  };

const findAllCustomer = async (userId) => sales.findAll(userId);
 
const create = async ({ products, userId, sellerId, deliveryAddress, deliveryNumber }) => sales
.create({
    products,
    userId, 
    sellerId, 
    deliveryAddress, 
    deliveryNumber,
});

// const findOne = async (id) => sales.findOne(id);

const findOne = async ({ id }) => {
    const userObj = await sales.findOne({ where: { id } });
    return userObj;
  };

const update = async (id, userRole) => sales.findOne(id, userRole);

module.exports = { 
    findAllSeller,
    findAllCustomer,
    create,
    findOne,
    update,
};
