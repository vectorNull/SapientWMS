const express = require('express');
const router = express.Router();
const inventoriesCtrl = require('../controllers/inventories');

router.get('/', inventoriesCtrl.index);

module.exports = router;