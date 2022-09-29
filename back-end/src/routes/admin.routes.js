const express = require('express');
const adminController = require('../controllers/admin.controller');
const adminValidator = require('../middlewares/adminValidator');

const router = express.Router();

router.post('/', adminValidator, (req, res) => adminController.postUser(req, res));
router.get('/', (req, res) => adminController.getUser(req, res));
router.delete('/', (req, res) => adminController.deleteUser(req, res));

module.exports = router;
