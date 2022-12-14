const salesService = require('../services/sales.service');

const getSaleById = async (req, res) => {
  const { orderId } = req.params;
  const sale = await salesService.getSaleById(orderId);

  return res.status(200).json(sale);
};

const getSalesBySellerId = async (req, res) => {
  const { sellerId } = req.body;
  const saleBySeller = await salesService.getSalesBySellerId(sellerId);

  return res.status(200).json(saleBySeller);
};

const getOrdersByUserId = async (req, res) => {
  const { userId } = req.body;
  const ordersByClientId = await salesService.getOrdersByUserId(userId);

  return res.status(200).json(ordersByClientId);
};

const patchOrderStatusById = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  await salesService.patchOrderStatusById(orderId, status);

  res.status(200).json({ message: 'Success, order status updated' });
};

module.exports = {
    getSalesBySellerId,
    getSaleById,
    getOrdersByUserId,
    patchOrderStatusById,
};
