const express = require('express');
const salesController = require('../controllers/sales.controller');
const tokenValidator = require('../middlewares/token.validator');

const router = express.Router({ mergeParams: true });

// Accessing the route via localhost:3001/sale/
router.get('/seller', tokenValidator, (req, res) => salesController.getSaleBySellerId(req, res));
router.get('/:id', tokenValidator, (req, res) => salesController.getSaleById(req, res));

module.exports = router;