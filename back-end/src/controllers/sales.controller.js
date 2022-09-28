const salesService = require('../services/sales.service');

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getSaleById(id);

  return res.status(200).json(sale);
};

const getSalesBySellerId = async (req, res) => {
  const { user: { id } } = req;
  const saleBySeller = await salesService.getSalesBySellerId(id);

  return res.status(200).json(saleBySeller);
};

module.exports = {
    getSalesBySellerId,
    getSaleById,
};