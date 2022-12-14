const { Sales, Products, Users } = require('../database/models');

const getSalesBySellerId = async (sellerId) => {
  const salesObj = await Sales.findAll({ where: { sellerId } });
  return salesObj;
};

const getSaleById = async (id) => {
  const saleObj = await Sales.findByPk(id, { include: [
      { model: Products, as: 'products' },
      { model: Users, as: 'seller', attributes: { exclude: ['password'] } },
    ] });

    if (!saleObj) {
      return { err: { code: 'notFound', message: 'sale not found' } };
    }

  return saleObj;
};

const getOrdersByUserId = async (userId) => {
  const ordersObj = await Sales.findAll({ where: { userId } });
  return ordersObj;
};

const patchOrderStatusById = async (id, status) => {
  const patchedOrder = await Sales.update({ status }, { where: { id } });
  return patchedOrder;
};

module.exports = {
  getSalesBySellerId,
  getSaleById,
  getOrdersByUserId,
  patchOrderStatusById,
};
