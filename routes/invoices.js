const express = require('express');
const router = express.Router();
const invoicesCtrl = require('../controllers/invoices');

router.post('/', invoicesCtrl.create);
router.get('/new', invoicesCtrl.new);
