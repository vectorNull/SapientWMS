const express = require('express');
const router = express.Router();
const invoicesCtrl = require('../controllers/invoices');

router.post('/invoices', invoicesCtrl.create);
router.get('/invoices/new', invoicesCtrl.new);

module.exports = router;
